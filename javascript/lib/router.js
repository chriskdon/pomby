if (typeof(POM) === 'undefined') var POM = {};

POM.router = {
    rr: null,

    init: function(){
        POM.router.rr = new RouteRecognizer();
    }
};
