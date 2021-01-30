const Project = require("../models/project.model");

exports.create = async (req, res) => {
  const newProject= new Project(req.body);

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
    let data = await Project.findOne({ id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving project");
  }
};

//find one and update
