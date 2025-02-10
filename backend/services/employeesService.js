const employeeRepo = require("../repositories/employeeRepo");
const departmentRepo = require("../repositories/departmentRepo");

const getAllEmployees = async () => {
  return await employeeRepo.getAllEmployees();
};

const getEmployeeById = async (id) => {
  return await employeeRepo.getEmployeeById(id);
};

const createEmployee = async (obj) => {
  const { firstName, lastName, startWorkYear, department } = obj;
  const departmentData = await departmentRepo.getDepartmentByName(department);
  const newEmployee = await employeeRepo.createEmployee({
    firstName,
    lastName,
    startWorkYear,
    departmentId: departmentData._id,
  });

  return newEmployee;
};

const updateEmployee = async (id, obj) => {
  const { firstName, lastName, startWorkYear, department } = obj;
  const departmentData = await departmentRepo.getDepartmentByName(department);
  const updatedEmployee = {
    firstName,
    lastName,
    startWorkYear,
    departmentId: departmentData._id,
  };
  return await employeeRepo.updateEmployee(id, updatedEmployee);
};

const deleteEmployee = async (id) => {
    await employeeRepo.deleteEmployee(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
