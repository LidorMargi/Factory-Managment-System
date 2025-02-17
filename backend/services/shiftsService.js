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

module.exports = {
  getAllShifts,
  getShiftById,
  createShift,
  updateShift,
};
