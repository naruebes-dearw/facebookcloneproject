const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../../models/user-model");

const FACEBOOK_APP_ID = "958911274837356";
const FACEBOOK_APP_SECRET = "8dcc2dea5c2da04a25423122c84efdc5";

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "/auth/login/facebook/callback",
  profileFields: ['id', 'displayName', 'picture.type(large)', 'first_name', 'last_name', 'middle_name']
},
  async (accessToken, refreshToken, profile, done) => {
    await User.findOne({ facebookId: profile.id }, async (err, user) => {

      if (!user) {
        const newUser = await new User({
          facebookId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          profileImgUrl: profile.photos[0].value
        }).save();
        if (newUser) return done(null, newUser);
      }

      return done(err, user);
    }).clone().catch(err => console.log(err));
  }
));