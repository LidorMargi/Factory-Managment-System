const Shift = require("../models/shiftModel");

const getAllShifts = (filters) => {
  return Shift.find();
};

const getShiftById = (id) => {
  return Shift.findById(id).populate("employee");
};

const getShiftByEmployeeId = (id) => {
  return Shift.find({ employees: id });
};

const removeEmployeeFromShifts = (id) => {
  return Shift.updateMany({ employees: id }, { $pull: { employees: id } });
};

const addShift = (obj) => {
  const shift = new Shift(obj);
  return shift.save();
};

const updateShift = (id, obj) => {
  return Shift.findByIdAndUpdate(id, obj);
};

module.exports = {
  getAllShifts,
  getShiftById,
  getShiftByEmployeeId,
  removeEmployeeFromShifts,
  addShift,
  updateShift,
};
