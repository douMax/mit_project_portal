// Importing libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import keys
const keys = require("./backend/config/keys");

// mongoose to connect mongodb
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected....");
  });

// intialise our app using express()
const app = express();
// app.use() is asking app to use a middleware. bodyParser is to parse the request's body different formats
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing the routes and ask the app to use the routes
const departmentRoutes = require("./backend/routes/department.route");
app.use(departmentRoutes);

const topicRoutes = require("./backend/routes/topic.route");
app.use(topicRoutes);
const staffRoutes = require("./backend/routes/staff.route");
app.use(staffRoutes);

const studentRoutes = require("./backend/routes/student.route");
app.use(studentRoutes);

app.get("/api", (req, res) => {
  res.send("Welcome to ProjectPortal API");
});

// start the server and listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}.....`);
});
