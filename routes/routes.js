const express = require('express')
const passport = require('passport')
const UserSchema = require('../Models/users')
const router = express.Router()

//get for your main page
//get & post for /register page
//get & post for /login page
//get for our /logout

router.get('/', function (req, res) {
    res.send('Main page')
})

router.get('/register', function (req, res) {
    res.send('register page')
})

router.post('/register', function (req, res) {
    res.send('register page')
})

router.get('/login', function (req, res) {
    res.send('login page')
})

router.post('/login', function (req, res) {
    res.send('login page')
})

router.get('/logout', function (req, res) {
    res.send('logout page')
})


module.exports = router
