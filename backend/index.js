const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRouter = require("./routers/authRouter")
const employeesRouter = require("./routers/employeesRouter")
const departmentsRouter =require("./routers/departmentsRouter")
const shiftsRouter =require("./routers/shiftsRouter")

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/employees", employeesRouter);
app.use("/departments", departmentsRouter);
//app.use("/shifts", shiftsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
