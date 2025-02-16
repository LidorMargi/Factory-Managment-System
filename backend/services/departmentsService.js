const departmentRepo = require("../repositories/departmentRepo");
const employeeRepo = require("../repositories/employeeRepo");

const getAllDepartments = async (filters) => {
  return await departmentRepo.getAllDepartments(filters);
};

const getDepartmentById = async (id) => {
  const department = await departmentRepo.getDepartmentById(id);
  const departmentEmployees = await employeeRepo.getAllEmployees({
    departmentId: id,
  });
  return { department, employees: departmentEmployees };
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
};
