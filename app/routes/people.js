// Modules =====================================================================
var router = require('express').Router();

router.get('/team', function(req, res){ // All the team players!

    var UserModel = req.app.get('models').user;

    UserModel
        .find({inbox: true})
        .limit(200)
        .sort('name')
        .select('name email picture')
        .exec(function(err, list){
            var output = {data: list, more: false};
            if(list.length >= 200){
                output.more = true;
            }
            res.json(output);
        });

});

router.get('/all', function(req, res){ // All the peoples!

    var UserModel = req.app.get('models').user;

    UserModel
        .find()
        .limit(500)
        .sort('name')
        .select('name email picture')
        .exec(function(err, list){
            var output = {data: list, more: false};
            if(list.length >= 500){
                output.more = true;
            }
            res.json(output);
        });

});

module.exports = router;
