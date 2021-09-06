const Project = require("../models/project.model");
const Topic = require("../models/topic.model");
const Group = require("../models/group.model");
const Client = require("../models/client.model");

exports.create = async (req, res) => {
  const newProject = new Project(req.body);
  console.log(newProject)
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

//Finding only Active Projects
exports.findActiveProjects = async (req, res) => {
  try {
    let activeProjects = await Project.find({ status: ["open"] });
    //TODO: append eoisReceived, group etc.
    console.log(activeProjects)
    const data = await Promise.all(
      activeProjects.map(async function (project) {
        let topics = [];
        if (project.topics) {
          topics = await Topic.find().where("_id").in(project.topics).exec();
          topics = topics.map((topic) => topic.name);
        }

        let client = await Client.findById(project.clientId);

        return {
          ...project._doc,
          topics: topics,
          clientName: client?.companyName,
          clientLogo: client?.companyLogoUrl,
        };
      })
    );

    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving projects");
  }
};

//Finding only Inctive Projects
exports.findInactiveProjects = async (req, res) => {
  try {
    let activeProjects = await Project.find({
      status: ["assigned", "closed", "pending"],
    });
    //TODO: append eoisReceived, group etc.
    const data = await Promise.all(
      activeProjects.map(async function (project) {
        let topics = [];
        if (project.topics) {
          topics = await Topic.find().where("_id").in(project.topics).exec();
          topics = topics.map((topic) => topic.name);
        }

        let client = await Client.findById(project.clientId);

        return {
          ...project._doc,
          topics: topics,
          clientName: client?.companyName,
          clientLogo: client?.companyLogoUrl,
        };
      })
    );

    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving projects");
  }
};

exports.findById = async (req, res) => {
  // retrive ID from the req
  const { projectId } = req.params;
  console.log(projectId);
  //
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
  const { projectId } = req.params;
  try {
    const updatedproject = await Project.findByIdAndUpdate(
      projectId,
      req.body,
      {
        new: true,
      }
    );
    res.status(203).send(updatedproject);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "Project not found with Id ${projectId}",
      });
    }
    console.log(err);
    return res.status(500).send({
      message: "Internal server error",
    });
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
      message: "Internal server error",
    });
  }
};

//Find all projects for a particular user based on his/her ID.
