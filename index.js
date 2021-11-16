const express = require("express");
const session = require("express-session");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const authRoutes = require("./routes/auth-routes");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/post-model");
const User = require("./models/user-model");
require("dotenv").config();

const port = process.env.PORT || 4040;

const app = express();

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongoDB."))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    // origin: "http://localhost:3000", // allow to server to accept request from different origin
    origin: "https://facebookcloneproject.herokuapp.com", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// set up routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/api", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});


app.get('/users-list', authCheck, (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.status(200).send(users);
  })
})

app.post('/post-message', authCheck, (req, res) => {
  const newPost = new Post({
    ownerId: req.body.ownerId,
    ownerName: req.body.ownerName,
    ownerProfileImgUrl: req.body.ownerProfileImgUrl,
    postTime: req.body.postTime,
    postText: req.body.postText,
    postImg: req.body.postImg,
  });
  newPost.save();
  res.status(200).send("post-message");
});

app.get('/posts', authCheck, (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) return next(err);
    res.status(200).send(posts);
  });
});

// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
});
// }

// connect react to nodejs express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  console.log(`http://localhost:${port}`);
});