const Employee = require('../models/employeeModel');

const getAllEmployees = () => {
  return Employee.find().populate(departmentId, name);
};

const getEmployeeById = (id) => {
  return Employee.findById(id).populate(departmentId, name);
};

const addEmployee = (obj) => {
  const employee = new Employee(obj);
  return employee.save();
};

const updateEmployee = (id, obj) => {
  return Employee.findByIdAndUpdate(id, obj);
};

const deleteEmployee = (id) => {
  return Employee.findByIdAndDelete(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
