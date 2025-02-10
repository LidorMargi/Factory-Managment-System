const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  numOfActions: Number,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
