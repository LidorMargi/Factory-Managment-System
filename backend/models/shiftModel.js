const mongoose = require("mongoose");
require("./employeeModel");

const shiftSchema = new mongoose.Schema(
  {
    date: Date,
    startHour: Number,
    endHour: Number,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "employee" }],
  },
  { versionkey: false }
);

const Shift = mongoose.model("shift", shiftSchema, "shifts");

module.exports = Shift;
