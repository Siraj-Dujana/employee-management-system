const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// GET all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// GET single employee
router.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

// CREATE employee
router.post("/", async (req, res) => {
  const newEmployee = new Employee(req.body);
  const savedEmployee = await newEmployee.save();
  res.status(201).json(savedEmployee);
});

// UPDATE employee
router.put("/:id", async (req, res) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedEmployee);
});

// DELETE employee
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
});

module.exports = router;