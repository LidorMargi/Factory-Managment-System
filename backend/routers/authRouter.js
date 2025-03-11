const express = require("express");
const authService = require("../services/authService");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, email } = req.body;
    const {token, name} = await authService.login(username, email)
    res.json({message: "Login successful", token, name});
    console.log(`User ${name} logged in`);
  } catch (error) {
    console.log("Login Error:", error);
    res.status(401).json(error);
  }
});

module.exports = router;
