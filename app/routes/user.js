// Modules =====================================================================
var router = require('express').Router(),
    auth_middleware = require('../lib/auth_middleware');

// All items require auth, you gotta be logged in! =============================
router.use(auth_middleware());

router.get('/', function(req, res){

    res.json(req.user);

});

module.exports = router;
