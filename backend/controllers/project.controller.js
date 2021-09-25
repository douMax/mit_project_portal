const Project = require("../models/project.model");
const Topic = require("../models/topic.model");
const Group = require("../models/group.model");
const Client = require("../models/client.model");

exports.create = async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const data = await newProject.save();
    res.status(201).json({ status: "success", data });
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

exports.findActiveProjects = async (req, res) => {
  try {
    let activeProjects = await Project.find({ status: ["open"] });
    res.status(200).send(activeProjects);
  } catch (error) {
    res.status(500).send("Error retriving projects");
  }
};

exports.fetchAllActiveProjects = async (req, res) => {
  try {
    const projects = await Project.find({ status: ['open', 'ongoing', 'completed'] });
    res.status(200).send(projects);
  }
  catch (err) {
    res.status(500).send("Error retriving projects");
  }
}

exports.findInactiveProjects = async (req, res) => {
  try {
    let projects = await Project.find({
      status: ["pending"],
    });
    res.status(200).send({ status: "success", projects });
  } catch (error) {
    res.status(500).send("Error retriving projects " + error);
  }
};

exports.findById = async (req, res) => {
  const { projectId } = req.params;
  try {
    const project = await Project.findById(projectId);
    const groups = await Group.find({ projectId: projectId });
    const data = {
      ...project._doc,
      groups: groups,
    };
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving group");
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedproject = await Project.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(203).json({ status: "success", message: "record updated" })
  }
  catch (err) {
    res.status(500).json({ status: "failed", message: "error updating record " + err })
  }
};

exports.delete = async (req, res) => {
  const { projectsId } = req.params;
  try {
    const project = await Project.findByIdAndRemove(projectsId);
    return res.status(200).send("Project is deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Project not found with Id ${projectId}",
      });
    }
  }
};

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
    (err);
    return res.status(500).send({
      message: "Internal server error",
    });
  }
};


exports.findClientProjects = async (req, res) => {
  const { clientId } = req.body;
  const projects = await Project.find({ clientId: clientId });
  if (projects) {
    res.status(200).send({ status: "success", projects })
  }
  else res.status(404).send({ status: "failure", message: "No data found for the user" })
}

exports.findUserProjects = async (req, res) => {
  const projects = await Project.find(req.body);
  if (projects) {
    res.status(200).send({ status: "success", projects })
  }
  else res.status(404).send({ status: "failure", message: "No data found for the user" })
}

exports.findUserEOI = async (req, res) => {
  const projects = await Project.find(req.body);
  if (projects) {
    res.status(200).send({ status: "success", projects })
  }
  else res.status(404).send({ status: "failure", message: "No data found for the user" })
}