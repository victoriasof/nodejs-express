const express = require('express')
const passport = require('passport')
const UserSchema = require('../Models/users')
const router = express.Router()

//get for your main page
//get & post for /register page
//get & post for /login page
//get for our /logout

router.get('/', function (req, res) {
    //console.log(req)
    res.render('index', {user: req.user});
})

router.get('/register', function (req, res) {
    res.render('register', {});
})

router.post('/register', function (req, res, next) {
    UserSchema.register(new UserSchema({username: req.body.username, email: req.body.email}), req.body.password, function(err){
        if(err) {
            console.log('error while user registered!', err);
            return next(err);
        }
        console.log('user registered!');
        res.redirect('/login');
    });
    //res.send('register page')
});

router.get('/login', function (req, res) {
    res.render('login', {user: req.user});
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    console.log('user logged in!')
    res.redirect('/')
})

router.get('/logout', function (req, res) {
    //res.send('logout page')
    req.logout();
    res.redirect('/');
})


module.exports = router
