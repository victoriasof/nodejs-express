const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

// define the User model schema
const UserSchema = new mongoose.Schema({

    username: String,
    email: {
        type: String,
        index: { unique: true }
    },

    date: String
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);



