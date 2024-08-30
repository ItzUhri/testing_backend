const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

// post data request
router.post("/signup", createUser);

router.get("/login", getUser);


module.exports = router;
