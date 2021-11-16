const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");

const LOGIN_SUCCESS_PATH = '/auth/login/success';
const LOGIN_FAILED_PATH = '/auth/login/failed';

const closeLoginPopup = "<script>window.close();</script>";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({
    success: true,
    message: "logout success."
  });
});

// facebook auth
router.get('/login/facebook',
  passport.authenticate('facebook'));

router.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: LOGIN_FAILED_PATH }),
  (req, res) => {
    res.status(200).send(closeLoginPopup);
  });

// google auth
router.get('/login/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get(
  '/login/google/callback',
  passport.authenticate('google', { failureRedirect: LOGIN_FAILED_PATH }),
  (req, res) => {
    res.status(200).send(closeLoginPopup);
  });

// local auth
router.post('/login/local', passport.authenticate('local', {
  successRedirect: LOGIN_SUCCESS_PATH,
  failureRedirect: LOGIN_FAILED_PATH
}))

// signup
router.post('/signup', async (req, res) => {
  const signupInfo = req.body;
  const { username, password } = signupInfo;

  const exists = await User.exists({ username: username });
  if (exists) {
    res.status(200).json({
      exists: true,
      data: `there is a ${username} user`
    });
    return;
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return next(err);

    const newUser = new User({
      username: username,
      password: hash,
      firstName: signupInfo.firstName,
      lastName: signupInfo.lastName,
    });

    newUser.save();
  });

  res.status(200).json({
    exists: false,
    data: `setup user:${username} success`
  });
});


module.exports = router;