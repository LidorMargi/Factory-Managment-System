const userRepo = require("../repositories/userRepo");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (username, email) => {
  const user = await userRepo.getUserByEmail(email);
  if (user.username === username) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: "1d",});
    return {token, name: user.name};
  } else {
    return "Invalid";
  }
};

module.exports = { login };
