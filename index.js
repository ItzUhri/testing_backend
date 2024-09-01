const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentroutes.js");
const productRoute = require("./routes/productroutes.js");
const userRoute = require("./routes/userroutes.js");
const orderRoute = require("./routes/orderroutes.js");
const app = express();

//import for model schema
const Product = require("./models/product.model.js");
const Student = require("./models/student.model.js");
const User = require("./models/user.model.js");
const Order = require("./models/order.model.js");

//middleware to use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);
app.use("/api/students", studentRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

// GET request
app.get("/", function (req, res) {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://itz_uhri:MM4cQWx0vxo1NDKs@backendapi.dphk2lx.mongodb.net/?retryWrites=true&w=majority&appName=backendapi"
  )
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("connection failed");
  });
