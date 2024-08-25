const express = require("express");
const Student = require("../models/student.model.js");
const router = express.Router();
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller.js");

// get all data request
router.get("/", getStudents);

// get 1 sinple data request
router.get("/:id", getStudent);

// post data request
router.post("/", createStudent);

// update request
router.put("/:id", updateStudent);

// delete request
router.delete("/:id", deleteStudent);

module.exports = router;
