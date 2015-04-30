// Modules =====================================================================
var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    _ = require('underscore');

// Generate user sesion object =================================================
function genUserObj(usr){
    // to provide a consistant session level object about the user
    // across multiple login types
    var outusr = {
        id: usr._id,
        email: usr.email,
        display: usr.name,
        name_first: usr.name_first,
        name_last: usr.name_last,
        picture: usr.picture,
        admin: usr.admin,
        perm:[]
    };

    if(usr.inbox) outusr.perm.push("inbox");
    if(usr.admin) outusr.perm.push("admin");
    if(!usr.external_user) outusr.perm.push("upload");

    return outusr;
}

// Set the serialization =======================================================
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Implement the lookup & create ===============================================
module.exports = function(app){

    // Basic login
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pass'
        },
        function(username, password, done) {
            var UserModel = app.get('models').primeUser;

            UserModel.findOne({email: username}).exec(function (err, user) {
                if (err) { return done(err); }

                if (!user) {
                    return done(null, false, { message: 'User not registered.' });
                }

                bcrypt.compare(password, user.password, function(err, res){
                    if(err || !res){
                        return done(null, false, { message: 'Incorrect password.' });
                    }else{
                        user.last_login = Date.now();
                        user.save();
                        return done(null, genUserObj(user));
                    }
                });

            });
        }
    ));

    // Google
    passport.use(new GoogleStrategy({
            callbackURL: app.get('config').url + '/auth/google/callback',
            clientID: app.get('config').google.id,
            clientSecret: app.get('config').google.secret
        },
        function (accessToken, refreshToken, profile, done) {
            /* Profile:
             * { provider: 'google',
             *  id: '101829213192662504137',
             *  displayName: 'Mike Valstar',
             *  name: { familyName: 'Valstar', givenName: 'Mike' },
             *  emails: [ { value: 'mvalstar@konradgroup.com' } ], */
            if (!profile.emails) return done(true, "Invalid Email");

            var empemail = false;

            //TODO: move to config
            _.each(profile.emails, function (item) {
                if (item.value.indexOf('@konradgroup.com')) {
                    empemail = item.value;
                }
            });

            if (!empemail)
                return done(true, "Invalid User, You must be an employee");

            // Valid user, lets create an object for their inbox
            // Fire and forget user model as you dont actually need a user to login, only for an inbox
            var UserModel = app.get('models').user;
            UserModel.findOne({email: empemail}).exec(function (err, user) {

                if(!user){ // New User

                    var u = new UserModel({
                        email: empemail,
                        gid: profile.id,
                        name: profile.displayName,
                        name_first: profile.name.givenName,
                        name_last: profile.name.familyName,
                        picture: profile._json.picture
                    });

                    u.save(function(err, user_new){
                        return done(null, genUserObj(user_new));
                    });

                }else{ // Existing User

                    user.last_login = Date.now();
                    user.picture = profile._json.picture;
                    user.inbox = true;
                    if(profile.name.givenName !== "")
                        user.name_first = profile.name.givenName;
                    if(profile.name.familyName !== "")
                        user.name_last = profile.name.familyName;
                    user.save();

                    return done(null, genUserObj(user));

                }
            });
        }
    ));

    return passport;
};
