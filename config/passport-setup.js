const passport = require("passport");
const User = require("../models/user-model");

// passport strategy
const passportStrategyLocal = require("./passport-strategy/passport-local");
const passportStrategyGoogle = require("./passport-strategy/passport-google");
const passportStrategyFacebook = require("./passport-strategy/passport-facebook");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});