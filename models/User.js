const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  image: {
    png: String,
    webp: String,
  },
  username : String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
