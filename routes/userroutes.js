const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
} = require("../controllers/user.controller.js");

// get all users
router.get("/", getUsers);

// create acc
router.post("/signup", createUser);

// login acc
router.get("/login", getUser);

module.exports = router;
 