const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");
const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/order.controller.js");

router.post("/", createOrder);
router.get("/", getOrders);
router.patch("/:id", updateOrderStatus);

module.exports = router;
