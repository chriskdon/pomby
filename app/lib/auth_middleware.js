var _ = require('underscore');
// Simple authenticated check ==================================================
module.exports = function(permissions){

    return function(req, res, next){

        if (!req.isAuthenticated()) {
            return res.status(401).render('401');
        }else{
            if(permissions){
                if(permissions.constructor === Array){
                    var x = _.intersection(req.user.perm, permissions);
                    if(x.length !== permissions.length){
                        return res.status(401).render('401');
                    }
                }else{
                    var y = _.contains(req.user.perm, permissions);
                    if(!y){
                        return res.status(401).render('401');
                    }
                }
            }

            next();
        }

    };

};
