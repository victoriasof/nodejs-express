const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const UserSchema = require('./Models/users')
const session = require('cookie-session')

const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserSchema.authenticate()));

app.use(session({keys: ['key1', 'key2']}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost/3000`)
})






