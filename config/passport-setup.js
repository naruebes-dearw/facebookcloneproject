const passport = require("passport");
const User = require("../models/user-model");
// const keys = require("./keys");

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

// twitter strategy

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: keys.TWITTER_CONSUMER_KEY,
//       consumerSecret: keys.TWITTER_CONSUMER_SECRET,
//       callbackURL: "/auth/twitter/redirect"
//     },
//     () => { }
//   )
// );

// passport.use(
//   new TwitterStrategy(
//     {
//       // options for the twitter start
//       consumerKey: keys.TWITTER_CONSUMER_KEY,
//       consumerSecret: keys.TWITTER_CONSUMER_SECRET,
//       callbackURL: "/auth/twitter/redirect"
//     },
//     async (token, tokenSecret, profile, done) => {
//       // find current user in UserModel
//       const currentUser = await User.findOne({
//         twitterId: profile._json.id_str
//       });
//       // create new user if the database doesn't have this user
//       if (!currentUser) {
//         const newUser = await new User({
//           name: profile._json.name,
//           screenName: profile._json.screen_name,
//           twitterId: profile._json.id_str,
//           profileImageUrl: profile._json.profile_image_url
//         }).save();
//         if (newUser) {
//           done(null, newUser);
//         }
//       }
//       done(null, currentUser);
//     }
//   )
// );


// local strategy

// passport.use(new localStrategy(function (username, password, done) {
//   User.findOne({ username: username }, function (err, user) {
//     if (err) return done(err);
//     if (!user) return done(null, false, { message: 'Incorrect username.' });

//     bcrypt.compare(password, user.password, function (err, res) {
//       if (err) return done(err);
//       if (res === false) return done(null, false, { message: 'Incorrect password.' });

//       return done(null, user);
//     });
//   });
// }));