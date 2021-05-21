const EOI = require("../models/eoi.model");
const Project = require("../models/project.model");
const Staff = require("../models/staff.model");
const Student = require("../models/student.model");

//Create a new EOI for a particular project.
exports.createEOI = async (req, res) => {
  const newEOI = new EOI(req.body);
  try {
    const data = await newEOI.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Find all EOIs for a particular project.
exports.findProjectEOIs = async (req, res) => {
  try {
    let data = await EOI.find({ projectId: req.params.projectId });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving EOIs");
  }
};

//Find all EOIs for a particular user.
exports.findUserEOIs = async (req, res) => {
  try {
    let data = await EOI.find({
      applicantId: req.params.applicantId,
    });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving EOIs");
  }
};

//Find *ONE* EOI.
exports.findOneEOIs = async (req, res) => {
  try {
    let data = await EOI.find({
      _id: req.params.eoiId,
    });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving EOIs");
  }
};

//Update EOI based on project and user. Used by Coordinator to allocate Students and Supervisors to projects.
exports.updateEOI = async (req, res) => {};
