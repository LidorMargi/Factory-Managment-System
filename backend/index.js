const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRouter = require("./routers/authRouter");
const employeesRouter = require("./routers/employeesRouter");
const departmentsRouter = require("./routers/departmentsRouter");
const shiftsRouter = require("./routers/shiftsRouter");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/employees", authMiddleware, employeesRouter);
app.use("/departments", authMiddleware, departmentsRouter);
app.use("/shifts", authMiddleware, shiftsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
