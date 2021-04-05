const router = require("express").Router();
const projectController = require("../controllers/project.controller");
const { route } = require("./department.route");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/projects")
  .get(projectController.findProjects)
  .post(projectController.create);

router
  .route("/api/projects/:projectsId")
  .get(projectController.findOneById)
  
  .put(projectController.update)
  .delete(projectController.delete);
  //route.route ("api/projects/:projectsId").get(projectController.findOneById)
  

module.exports = router;
