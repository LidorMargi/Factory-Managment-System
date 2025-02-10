const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(proccess.env.MONGO_URI)
    .then(() => console.log("connected to DB"))
    .catch(console.log);
};

module.exports = connectDB;
