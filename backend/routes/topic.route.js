const router = require("express").Router();
const topicController = require("../controllers/topic.controller");

// checkAuth, router,

// router.use(checkAccessLevel, (req, res) => {

// })

router
  .route("/api/topic")
  .get(topicController.findTopic)
  .post(topicController.create);

module.exports = router;
// /api/topic/:id

router
  .route("/api/topic/:id")
  .get(topicController.findOneById)
  .put(topicController.update)
  .delete(topicController.delete);
// /projects/:projectId
module.exports = router;
