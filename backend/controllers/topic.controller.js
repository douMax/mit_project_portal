const Topic = require("../models/topic.model");

exports.create = async (req, res) => {
  const newTopic = new Topic(req.body);

  try {
    const data = await newTopic.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findTopic = async (req, res) => {
  try {
    let data = await Topic.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving topic");
  }
};

exports.findOneById = async (req, res) => {
  // retrive ID from the req
  const id = req.params.id;
  //
  try {
    let data = await Topic.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving topic");
  }
};

//find one and update
// update - PUT request
// find the record by id first and update it.
exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // req.body = { TopicName: sdfsdf  }

    res.status(203).send(updatedTopic);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Topic not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

// delete
// find it first and delete.

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const topic = await Topic.findByIdAndRemove(id);
    return res.status(200).send("Topic deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Topic not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};
