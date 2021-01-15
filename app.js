const express = require('express')
const path = require('path')
const port = 8888
const session = require('cookie-session')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const UserSchema = require('./Models/users')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const app = express()

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//bodyParser should be on top and routes on the bottom (middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({keys: ['key1', 'key2']}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(UserSchema.authenticate()));
passport.serializeUser(UserSchema.serializeUser());
passport.deserializeUser(UserSchema.deserializeUser());

mongoose.connect('mongodb://localhost/testMongoDb',
    {useNewUrlParser: true, useUnifiedTopology: true},
    function (err) {
        if (err) {
            console.log('Could not connect to mongodb.');
        }
    });
mongoose.set('useCreateIndex', true);

app.use('/', require('./routes/routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:8888`)
})







