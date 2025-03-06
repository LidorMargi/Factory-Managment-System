const shiftRepo = require("../repositories/shiftRepo");

const getAllShifts = () => {
  return shiftRepo.getAllShifts();
};

const getShiftById = (id) => {
  return shiftRepo.getShiftById(id);
};

const createShift = (obj) => {
  return shiftRepo.addShift(obj);
};

const updateShift = (id, obj) => {
  return shiftRepo.updateShift(id, obj);
};

const addEmployeeToShift = (id, { employeeId }) => {
  const shift = shiftRepo.getShiftById(id);
  shift.employees.push(employeeId);
  return shiftRepo.updateShift(id, shift);
};

module.exports = {
  getAllShifts,
  getShiftById,
  createShift,
  updateShift,
  addEmployeeToShift,
};
