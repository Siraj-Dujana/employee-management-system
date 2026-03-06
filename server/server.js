const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());

const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

dotenv.config();
connectDB();



app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));