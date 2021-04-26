const router = require("express").Router();
const studentController = require("../controllers/student.controller");

// HTTP methods are 
// Get- read
// Post - Create
// Put/patch - Update
// Delete - Delete

router
  .route("/api/students")
  .get(studentController.findEnrolledStudents)
  .post(studentController.create);

module.exports = router;