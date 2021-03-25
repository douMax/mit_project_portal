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
