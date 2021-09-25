const router = require("express").Router();
const topicController = require("../controllers/topic.controller");

router
  .route("/api/topic")
  .get(topicController.findTopic)
  .post(topicController.create);

module.exports = router;

router
  .route("/api/topic/:id")
  .get(topicController.findOneById)
  .put(topicController.update)
  .delete(topicController.delete);

module.exports = router;
