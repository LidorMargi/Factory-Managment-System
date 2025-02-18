const express = require("express");
const authService = require("../services/authService");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, email } = req.body;
    res.json(await authService.login(username, email));
    console.log("logged in");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
