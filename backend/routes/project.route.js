const router = require("express").Router();
const projectController = require("../controllers/project.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/projects")
  .get(projectController.findProjects)
  .post(projectController.create);

router.route("/api/projects/active").get(projectController.findActiveProjects);
router
  .route("/api/projects/inactive")
  .get(projectController.findInactiveProjects);

router
  .route("/api/projects/:projectId")
  .get(projectController.findById)
  .put(projectController.update);

router
  .route("/api/projects/:id/topics")
  .get(projectController.findProjectTopics);

module.exports = router;
