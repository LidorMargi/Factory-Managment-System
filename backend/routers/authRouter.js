const express = require("express");
const authService = require("../services/authService");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, email } = req.body;
    res.json(await authService.login(username, email));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
