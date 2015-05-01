module.exports = function(app){

    app.use('/auth', require('./auth')(app));

    app.use('/people', require('./people'));
    app.use('/user', require('./user'));

    app.use('/', require('./root'));

}
