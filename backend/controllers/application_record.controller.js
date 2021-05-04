const ApplicationRecord = require("../models/application_record.model");
const Project = require("../models/project.model");
const Student = require("../models/student.model");

exports.create = async (req, res) => {
  const newAR = new ApplicationRecord(req.body);

  try {
    const data = await newAR.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findApplicationRecords = async (req, res) => {
  try {
    let data = await ApplicationRecord.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving Application Records");
  }
};

exports.findById = async (req, res) => {
  // retrive ID from the req
  const { applicationId } = req.params;

  try {
    const AR = await ApplicationRecord.findById(applicationId);
    const project = await Project.findById(AR.projectId);
    const student = await Student.findById(AR.studentId);
    const data = {
      ...AR._doc,
      student: student,
      project: project,
    };
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving group");
  }
};
