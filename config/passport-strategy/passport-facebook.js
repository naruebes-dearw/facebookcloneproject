const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../../models/user-model");

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "https://facebookcloneproject.herokuapp.com/auth/login/facebook/callback",
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