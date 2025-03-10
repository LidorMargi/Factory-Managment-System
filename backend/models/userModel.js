const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    username: String,
    email: String,
    numOfActions: Number,
  },
  { versionkey: false }
);

const User = mongoose.model("user", userSchema, "users");

module.exports = User;
