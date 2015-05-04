var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function () {

    var fileTypes = ["single", "inbox", "project"];

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
        }),

        file: mongoose.model('file', {
            display: String,
            description: String,
            type: { type: String, enum: fileTypes },
            author: String,
            authorId: { type: Schema.Types.ObjectId, ref: 'primeuser', index: true },
            //project: { type: Schema.Types.ObjectId, ref: 'project', index: true },
            size: Number,

            file_location: String,
            file_relloc: String,
            thumb_location: String,
            thumb_relloc: String,
            logical_loc: String,

            uploaded: { type: Date, default: Date.now },
            first_dl: Date,
            last_dl: Date,
            expiry: Date,
            deleted: { type: Boolean, default: false },
            del_try: Number,

            previousVersions: [{ type: Schema.Types.ObjectId, ref: 'file', index: true }],
            hasParent: { type: Boolean, default: false },

            meta: {
                downloads:  Number,
                version: { type: Number, default: 1 }
            },

            emails: [{
                email: String,
                token: String,
                sent: { type: Date, default: Date.now },
                first_dl: Date,
                last_dl: Date,
                downloads: { type: Number, default: 0 }
            }]
        })
    }

    return models;
}
