const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

});
const Post = mongoose.model("Post", roomsSchema);
module.exports = Post;