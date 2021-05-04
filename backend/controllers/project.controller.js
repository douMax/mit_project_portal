const Project = require("../models/project.model");
const Topic = require("../models/topic.model");

exports.create = async (req, res) => {
  const newProject = new Project(req.body);

  try {
    const data = await newProject.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findProjects = async (req, res) => {
  try {
    let data = await Project.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving projects");
  }
};

exports.findOneById = async (req, res) => {
  // retrive ID from the req
  const id = req.params.id;
  //
  try {
    let data = await Project.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving project");
  }
};

//find the associated topics
exports.findProjectTopics = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    let topics = [];
    if (project.topics) {
      topics = await Topic.find().where("_id").in(project.topics).exec();
      return res.status(200).send(topics);
    } else {
      return res.status(400).send("No topics found with the project.");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Project not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};
