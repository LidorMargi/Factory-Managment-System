const mongoose = require("mongoose");
require("./departmentModel");

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  startWorkYear: Number,
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "department" },
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
