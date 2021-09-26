const router = require("express").Router();
const studentController = require("../controllers/student.controller");

router
  .route("/api/students")
  .get(studentController.findAllStudents)

router
  .route("/api/auth/student/signup")
  .post(studentController.create);

router
  .route("/api/auth/student")
  .post(studentController.getStudent);

router
  .route("/api/students/enrolled")
  .get(studentController.findEnrolledStudents);

router
  .route("/api/students/:studentid")
  .get(studentController.findOneById)
  .put(studentController.update)
  .delete(studentController.delete);
module.exports = router;
