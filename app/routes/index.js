module.exports = function(app){

    app.use('/auth', require('./auth')(app));

    app.use('/people', require('./people'));

    app.use('/', require('./root'));

}
