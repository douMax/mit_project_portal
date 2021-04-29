const router = require("express").Router();
const projectController = require("../controllers/project.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/projects")
  .get(projectController.findProjects)
  .post(projectController.create);

router.route("/api/projects/:id").get(projectController.findOneById);

router
  .route("/api/projects/:id/topics")
  .get(projectController.findProjectTopics);

module.exports = router;
