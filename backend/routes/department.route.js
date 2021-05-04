const router = require("express").Router();
const departmentController = require("../controllers/department.controller");

// // Using a different router method to create routes while useing the verifyToken.
// // Code below can be uncommented to use JWT Authorization.
// const verifyToken = require("../test_user_auth/testverifytoken"); //Import the verifyToken middleware to check to perform authorization.
// //CREATE new department.
// router.post("/api/departments", verifyToken, departmentController.create);
// //GET all departments.
// router.get(
//   "/api/departments",
//   verifyToken,
//   departmentController.findDepartments
// );

// //GET one department by ID.
// router.get(
//   "/api/departments/:departmentId",
//   verifyToken,
//   departmentController.findOneById
// );
// //UPDATE one department.
// router.put(
//   "/api/departments/:departmentId",
//   verifyToken,
//   departmentController.update
// );
// //DELETE one department.
// router.delete(
//   "/api/departments/:departmentId",
//   verifyToken,
//   departmentController.delete
// );

// Code below can be commented to use JWT Authorization version.
router
  .route("/api/departments")
  .get(departmentController.findDepartments)
  .post(departmentController.create);

router
  .route("/api/departments/:departmentId")
  .get(departmentController.findOneById)
  .put(departmentController.update)
  .delete(departmentController.delete);

module.exports = router;
