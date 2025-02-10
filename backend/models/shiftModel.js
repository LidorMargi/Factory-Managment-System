const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  date: Date,
  startHour: Number,
  endHour: Number,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

const Shift = mongoose.model("shift", shiftSchema);

module.exports = Shift;
