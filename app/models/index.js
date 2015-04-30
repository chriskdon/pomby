var mongoose = require('mongoose'),
    _ = require('underscore');
var Schema = mongoose.Schema;

module.exports = function (db) {

    var models = {
        user: mongoose.model('primeuser', {
            name: String,
            name_first: String,
            name_last: String,
            gid: String,
            picture: String,
            email: String,
            password: String,
            invitecode: String,
            recovercode: String,
            admin: { type: Boolean, default: false },
            external_user: { type: Boolean, default: false },
            inbox: { type: Boolean, default: true },
            version: { type: Number, default: 1 },
            first_login: { type: Date, default: Date.now },
            last_login: { type: Date, default: Date.now }
        })
    }

    return models;
}
