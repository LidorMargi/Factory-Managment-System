const express = require("express");
const employeesService = require("../services/employeesService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    res.json(await employeesService.getAllEmployees(filters));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await employeesService.getEmployeeById(id));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await employeesService.createEmployee(req.body));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await employeesService.updateEmployee(id, req.body));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await employeesService.deleteEmployee(id));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
