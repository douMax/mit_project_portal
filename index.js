const express = require("express");
const mongoose = require("mongoose");
const keys = require("./backend/config/keys");
const bodyParser = require("body-parser");

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected....");
  });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const departmentRoutes = require("./backend/routes/department.route");
app.use(departmentRoutes);
const topicRoutes = require("./backend/routes/topic.route");
app.use(topicRoutes);

const projectRoutes = require("./backend/routes/project.route");
app.use(projectRoutes);


app.get("/api", (req, res) => {
  res.send("Welcome to ProjectPortal API");
});

// start the server and listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}.....`);
});
