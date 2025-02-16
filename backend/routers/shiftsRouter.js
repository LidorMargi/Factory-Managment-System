const express = require("express");
const shiftsService = require("../services/shiftsService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    res.json(await shiftsService.getAllShifts(filters));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await shiftsService.getShiftById(id));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await shiftsService.createShift(req.body));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await shiftsService.updateShift(id, req.body));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
