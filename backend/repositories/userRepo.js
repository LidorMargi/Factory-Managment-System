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

const addUser = (obj) => {
  const user = new User(obj);
  return user.save();
};

const updateUser = (id, obj) => {
  return User.findByIdAndUpdate(id, obj);
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
};
