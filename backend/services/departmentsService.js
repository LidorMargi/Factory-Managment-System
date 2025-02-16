const departmentRepo = require("../repositories/departmentRepo");
const employeeRepo = require("../repositories/employeeRepo");

const getAllDepartments = async (filters) => {
  const departments = await departmentRepo.getAllDepartments(filters);
  const finalDepartments = await Promise.all(
    departments.map(async (department) => {
      const departmentEmployees = await employeeRepo.getAllEmployees({
        departmentId: department.id,
      });
      return { department, employees: departmentEmployees };
    })
  );
  return finalDepartments;
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
