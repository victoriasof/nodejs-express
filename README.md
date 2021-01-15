# Node.js Workshop

## Learning objectives

- Using dependencies
- Express (server, routing)
- Storing users in MongoDB with mongoose
- Authenticate users with Passport

## Let's get crackin'!

![office](https://media.giphy.com/media/TuZ8v66TzGeYJW23as/source.gif)

1. Create repository
2. Create file `app.js`
3. Type `npm init` when you are in root folder. Now we can install some packages!
4. Install Express, [bodyParser](https://www.npmjs.com/package/body-parser) and [Cookie-session](https://www.npmjs.com/package/cookie-session) with `npm install express body-parser cookie-session` Make sure you require the dependencies at the top of the `app.js` file and paste following code below them:

`app.use(bodyParser.json());`

`app.use(bodyParser.urlencoded({extended: false}));`

`app.use(session({keys: ['key1', 'key2']}));`

Bodyparser will allow Express to read incoming HTTP POST data. We can then use that data via req.body.

Cookie-session as you might guess will allow the user to close & open our site without having to re-enter credentials.

5. Install Nodemon with `npm install --save-dev nodemon` Nodemon will automatically detect changes and restart your server.
6. Set up [Express](https://expressjs.com/en/starter/hello-world.html) server in `app.js`.
7. Go into `package.json`, look for `scripts`, make a new script called `start` and type `nodemon app.js`. This way we can start the server by typing `npm start`.
8. Go to localhost:`PORT` and gaze upon your newly created server! (that does absolutely nothing but greet the world)


9. Now that we have a very basic server, let's add MongoDB in which we will save our users. **IMPORTANT**: if you have not yet installed MongoDB, go [here](https://docs.mongodb.com/manual/administration/install-community/) and follow the instructions for your OS. Also don't forget to RUN the database service.
10. Create folder `Models` with file `users.js` in it.
11. Next up, you might have guessed it already, we install another dependency! [Mongoose](https://mongoosejs.com/) will help us create a **Schema** in the `users.js` file. Make sure that Schema has the following properties: username, email and date. Don't forget to export that module because we will use it in other files.
12. Go back to `app.js` and make a **Mongoose connection**.
13. Congrats, your database is initialized and connected!
    

14. Go back to root folder and install following dependencies: [Passport](http://www.passportjs.org/docs/), [Passport-local](http://www.passportjs.org/packages/passport-local/) & [Passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose).
    Passport will authenticate requests. Passport-local is the strategy we will be using, this strategy requires a username & password to authenticate. There are a LOT more strategies you can use, (google/facebook auth, JWT, ...) check them out on [Passport](http://www.passportjs.org/) under strategies. Lastly we have Passport-local-mongoose which is a plugin for Passport that will simplify some operations like hashing/salting passwords and more!
15. Let's start our authentication. Go to the file where you made the Mongoose Schema and plug in passport-local-mongoose, check the documentation of that package on how to do that.
16. Go to `app.js` and **Require** Passport. Check out the "Configure" tab in the Passport docs to see what you need to implement. Some keywords: [LocalStrategy](https://www.npmjs.com/package/passport-local-mongoose), initialize, session, serialize/deserialize.
17. Take a breather and look at all the progress you've made so far!


18. Before we go on to create our routes, let's install the template engine [pug](https://pugjs.org/api/getting-started.html) with `npm install pug`. Copy the `views` folder to your project root and paste following code below where you require Express in `app.js`:

    `app.set('view engine', 'pug');`

    `app.set('views', path.join(__dirname, 'views'));`

This way we can render our HTML in the routes which we will create next. To use the path.join function we need to also require it on top:

`const path = require('path');`

19. Now let's create some [Routes](https://expressjs.com/en/guide/routing.html) to authenticate our users.
20. Create folder `routes` with file `routes.js` and require: express.Router(), Passport & your Schema.
21. Create the following routes:
- get for your main page
- get & post for /register page
- get & post for /login page
- get for our /logout

Go back to `app.js` and at the bottom of that file require these routes like so:
`app.use('/', require('./routes/routes'));`

22. After that let's start with the /register POST route. Call upon your imported Schema and register it like so (my schema is called User): `User.register(new User({your properties}), req.body.password), function(err)`. After that you can redirect the route to login or main page.
23. Next up the /login POST route. Here we need to passport.authenticate the 'local' strategy, this needs to be right after the path property. And again redirect the user to where to want.
24. Now let's do the remaining get routes.
25. In the main GET route we need to render the index file and request our user as options property.
26. In the /register GET route we render the register file.
27. In the /login GET route we do the same as the main route, except we render the login page.
28. In the /logout GET route we request the logout() function that Passport kindly supplies us with.
29. YOU'RE DONE! Check out localhost:`PORT` to test your functionality.

![thumbsup](https://media.giphy.com/media/111ebonMs90YLu/source.gif)


### If you are stuck somewhere, don't hesitate to ask me for help!