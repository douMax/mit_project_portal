const router = require("express").Router();
const projectController = require("../controllers/project.controller");

router
  .route("/api/projects")
  .get(projectController.findProjects)
  .post(projectController.create);

router.route("/api/projects/active").get(projectController.findActiveProjects);

router.route("/api/client/projects").post(projectController.findClientProjects);

router.route("/api/user/projects").post(projectController.findUserProjects);

router.route("/api/user/eoi/projects").post(projectController.findUserEOI);

router.route("/api/update/projects/:id").put(projectController.update);

router
  .route("/api/projects/inactive")
  .get(projectController.findInactiveProjects);

router
  .route("/api/projects/:projectId")
  .get(projectController.findById)

router
  .route("/api/projects/:id/topics")
  .get(projectController.findProjectTopics);

module.exports = router;
