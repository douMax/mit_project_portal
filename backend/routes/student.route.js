const router = require("express").Router();
const studentController = require("../controllers/student.controller");

// HTTP methods are
// Get- read
// Post - Create
// Put/patch - Update
// Delete - Delete

router
  .route("/api/students")
  .get(studentController.findAllStudents)
  .post(studentController.create);

router
  .route("/api/students/enrolled")
  .get(studentController.findEnrolledStudents);

router
  .route("/api/students/:studentid")
  .get(studentController.findOnById)
  .put(studentController.update)
  .delete(studentController.delete);
module.exports = router;
