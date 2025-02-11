const User = require("../models/userModel");

const getAllUsers = (filters) => {
  return User.find(filters);
};

const getUserById = (id) => {
  return User.findById(id);
};

const getUserByEmail = (email) => {
  return User.findOne({ email });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
};
