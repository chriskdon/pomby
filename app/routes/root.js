// Modules =====================================================================
var router = require('express').Router();
var path = require('path');

// Homepage or Login page ======================================================
router.get('/', function(req, res){

    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname + '/../../views/home.html'));
    }else{
        res.sendFile(path.join(__dirname + '/../../views/login.html'));
    }

});

// Site info ===================================================================
router.get('/info', function(req, res){

    res.json(req.app.get('config').site);

});

module.exports = router;
