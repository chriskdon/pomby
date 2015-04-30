/* global __dirname */
// index.js

// Modules =====================================================================
var express = require('express'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    morgan = require('morgan');

// Configuration ===============================================================
var config = require('./config');

// Database ====================================================================
//mongoose.connect(config.db.url);

// Express =====================================================================
var app = express();

// Set the big variables
app.set("config", config);
//app.set("db", mongoose);

// parse multi-part forms
app.use(multer({ dest: './uploads/', includeEmptyFields: true}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cookie parser required for sessions
app.use(cookieParser());
// basic sessions
app.use(session({
                 secret: 'THETAVAULT_SECRET',
                 resave: true,
                 saveUninitialized: true
                }));

// Passport for google login
//app.use(app.get("passport").initialize());
//app.use(app.get("passport").session());

// Static files
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/compiled'));

// Dev Logging =================================================================
if ('development' === app.get('env')) {
    //app.use(morgan('combined'));
    //app.use(express.logger('dev'));
    //app.use(express.errorHandler());
}

// Routes ======================================================================
require('./app/routes')(app);

// Server Startup ==============================================================
var http = require('http').Server(app);
var server = app.listen(config.port, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('The magic happens at: http://%s:%s', host, port);

});

// Socket Commander ============================================================,
var io = require('socket.io')(server);
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
