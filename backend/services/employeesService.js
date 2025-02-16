const employeeRepo = require("../repositories/employeeRepo");
const departmentRepo = require("../repositories/departmentRepo");
const shiftRepo = require("../repositories/shiftRepo");

const getAllEmployees = async (filters) => {
  const employees = await employeeRepo.getAllEmployees(filters);
  const finalEmployees = await Promise.all(
    employees.map(async (employee) => {
      const employeeShifts = await shiftRepo.getShiftByEmployeeId(employee._id);
      return { employee, shifts: employeeShifts };
    })
  );
  return finalEmployees;
};

const getEmployeeById = async (id) => {
  const employee = await employeeRepo.getEmployeeById(id);
  const employeeShifts = await shiftRepo.getShiftByEmployeeId(id);
  return { employee, shifts: employeeShifts };
};

const createEmployee = async (obj) => {
  const { firstName, lastName, startWorkYear, department } = obj;
  const departmentData = await departmentRepo.getDepartmentByName(department);
  const newEmployee = await employeeRepo.addEmployee({
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
  await shiftRepo.removeEmployeeFromShifts(id);
  return await employeeRepo.deleteEmployee(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
