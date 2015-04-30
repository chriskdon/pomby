module.exports = function (app) {
    var router = require('express').Router()

    // Route: /isauth
    router.get('/isauth', function (req, res) {
        // return true via ajax
        res.contentType('application/json')
        if (req.isAuthenticated()) {
            res.status(200).send(true)
        } else {
            res.status(200).send(false)
        }
    });

    // Route: /logout
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // Redirect the user to Google for authentication.  When complete, Google
    // will redirect the user back to the application at
    //     /google/return
    router.get('/google', app.get('passport').authenticate('google', { scope: 'profile openid email' }));

    // Google will redirect the user to this URL after authentication.  Finish
    // the process by verifying the assertion.  If valid, the user will be
    // logged in.  Otherwise, authentication has failed.
    router.get('/google/callback',
        app.get('passport').authenticate('google', {failureRedirect: '/500.html' }),
        function(req, res){
            res.redirect('/');
        });

    router.post('/login',
        app.get('passport').authenticate(
            'local',
            { successRedirect: '/',
              failureRedirect: '/',
              failureFlash: false }
        )
    );

    return router;
};
