const Shift = require("../models/shiftModel");

const getAllShifts = () => {
  return Shift.find();
};

const getShiftById = (id) => {
  return Shift.findById(id);
};

const getShiftByEmployeeId = (id) => {
  return Shift.find({ employees: id }).populate("employees")
}

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

const deleteShift = (id) => {
  return Shift.findByIdAndDelete(id);
};

module.exports = {
  getAllShifts,
  getShiftById,
  getShiftByEmployeeId,
  removeEmployeeFromShifts,
  addShift,
  updateShift,
  deleteShift,
};
