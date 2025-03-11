const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    username: String,
    email: String,
    numOfActions: { type: Number, default: 10 },
    lastActionDate: { type: String, default: new Date().toISOString().split("T")[0] },
  },
  { versionkey: false }
);

const User = mongoose.model("user", userSchema, "users");

module.exports = User;
