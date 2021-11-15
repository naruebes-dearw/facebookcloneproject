// const { Router } = require("express");
// const bcrypt = require("bcrypt");
// const { exists } = require("../models/user-model");
// const User = require("../models/user-model");

// // signup
// Router.post('/signup', async (req, res) => {
//   const signupInfo = req.body;
//   console.log(signupInfo);
//   res.status(200).send(`setup user: success`);
// });

// module.exports = router;






  // const exists = await User.exists({ username: username });
  // if (exists) {
  //   res.status(200).send(`there is a ${username} user`);
  //   return;
  // }

  // bcrypt.hash(password, 10, (err, hash) => {
  //   if (err) return next(err);

  //   const newAdmin = new User({
  //     username: username,
  //     password: hash
  //   });

  //   newAdmin.save();

  //   res.status(200).send(`setup user:${username} success`);
  // });


// signup
// Router.post('/signup', async (req, res) => {
//   const signupInfo = req.body;
//   console.log(signupInfo);
//   res.status(200).send(`setup user: success`);

  // const exists = await User.exists({ username: username });
  // if (exists) {
  //   res.status(200).send(`there is a ${username} user`);
  //   return;
  // }

  // bcrypt.hash(password, 10, (err, hash) => {
  //   if (err) return next(err);

  //   const newAdmin = new User({
  //     username: username,
  //     password: hash
  //   });

  //   newAdmin.save();

  //   res.status(200).send(`setup user:${username} success`);
  // });
// });
