const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../../models/user-model");

// const GOOGLE_CLIENT_ID = "1063435742656-p28qqr27lcjuoh6nh015g3kfig0j357h.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/login/google/callback"
},
  async (accessToken, refreshToken, profile, done) => {
    await User.findOne({ googleId: profile.id }, async (err, user) => {

      if (!user) {
        const newUser = await new User({
          googleId: profile.id,
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          profileImgUrl: profile._json.picture,
        }).save();
        if (newUser) return done(null, newUser);
      }

      return done(err, user);
    }).clone().catch(err => console.log(err));
  }
))