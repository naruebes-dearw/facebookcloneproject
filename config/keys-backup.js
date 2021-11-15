// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
// const TWITTER_TOKENS = {
//   TWITTER_CONSUMER_KEY: "SOME KEY",
//   TWITTER_CONSUMER_SECRET: "SOME SECRET",
//   TWITTER_ACCESS_TOKEN: "SOME ACCESS TOKEN",
//   TWITTER_TOKEN_SECRET: "SOME TOKEN SECRET"
// };

const DB_USER = "mern";
const DB_PASSWORD = "mern123";
const DB_name = "fakebook";
const MONGODB = {
  // MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
  MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.7rgtl.mongodb.net/${DB_name}?retryWrites=true&w=majority`
};

const SESSION = {
  COOKIE_KEY: "e-.oh@a_439lk4r;s/d"
};

const KEYS = {
  // ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;