module.exports = function(app){
    app.use('/', require('./root'));
    app.use('/people', require('./people'));
}
