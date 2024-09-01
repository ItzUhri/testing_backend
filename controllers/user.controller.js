const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hfsdahfjkasdfhlsdjk";
const bcrypt = require('bcrypt');

// get acc
const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create acc
const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.error('Error during user creation:', err);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Login endpoint
const getUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, message: `Welcome ${username}` });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
};
