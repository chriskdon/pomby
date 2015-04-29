// Modules =====================================================================
var router = require('express').Router();
var path = require('path');

// Homepage or Login page ======================================================
router.get('/', function(req, res){
console.log('root');
    if (true) {

        res.sendFile(path.join(__dirname + '/../../views/login.html'));

    }else{

        res.sendFile(path.join(__dirname + '/../../views/home.html'));

    }

});

module.exports = router;
