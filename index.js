const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentroutes.js");
const app = express();

//import for model schema
const Student = require("./models/student.model.js");

//middleware to use json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/students", studentRoute);

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
