const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  ownerId: String,
  ownerName: String,
  ownerProfileImgUrl: String,
  postTime: String,
  postText: String,
  postImg: String,
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;