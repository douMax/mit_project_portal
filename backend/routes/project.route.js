const router = require("express").Router();
const projectController = require("../controllers/project.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/projects")
  .get(projectController.findProjects)
  .post(projectController.create);

module.exports = router;
