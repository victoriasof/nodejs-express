const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

// define the User model schema
const UserSchema = new mongoose.Schema({

    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now}

});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);



