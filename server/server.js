const express = require('express');
const path = require('path');
const routes = require('./routes');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const environment = process.env.Node_ENV;
require("dotenv").config();
const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;

console.log(consumerKey);

let user = {};
let liteArgs = {  
  consumer_key: consumerKey ,  
  consumer_secret: consumerSecret,  
  access_token_key: '',  
  access_token_secret: ''  
};
let client;

const app = express();

// Parses requests that include URL
app.use(express.urlencoded({ extended: true }));

// Parses requests that include JSON
app.use(express.json());

/* If we're in production, this allows Express to serve the static assets from /client/build. When
the project is built, React places its static assets (JavaScript, CSS, Images, etc.) there in chunk
files for efficiency, so using this directory in production is also more efficent. */
if (environment === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

passport.use(new TwitterStrategy({
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  callbackURL: 'api/auth/twitter/callback'
},
function(token, tokenSecret, profile, cb) {
   user = { ...profile }
   liteArgs['access_token_key'] = token
   liteArgs['access_token_secret'] = tokenSecret
   client = new twitter(liteArgs)
  return cb(null, profile)
}));

passport.serializeUser((user, cb) => {
  cb(null, user)
});

passport.deserializeUser((obj,cb) => {
  cb(null, obj)
});

app.use(session({
  secret: "PmX'tK11lc$78szv#fUc\"(|(-Q8lFGWTu<tgL*n}TD[", resave: true, saveUninitialized: true, secure: true }));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));