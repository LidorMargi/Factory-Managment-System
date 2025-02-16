const express = require("express");
const departmentsService = require("../services/departmentsService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    res.json(await departmentsService.getAllDepartments(filters));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await departmentsService.getDepartmentById(id));
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});
/*
router.post("/", async (req, res) => {
  try {
    res.json(await departmentsService.createDepartment(req.body));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await departmentsService.updateDepartment(id, req.body));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await departmentsService.deleteDepartment(id));
  } catch (error) {
    res.status(500).json(error);
  }
});
*/
module.exports = router;
