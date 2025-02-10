const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/auth", require("./routers/authRouter"));
app.use("/employees", require("./routers/employeesRouter"));
app.use("/departments", require("./routers/departmentsRouter"));
app.use("/shifts", require("./routers/shiftsRouter"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
