const EOI = require("../models/eoi.model");
const Project = require("../models/project.model");
const Staff = require("../models/staff.model");
const Student = require("../models/student.model");

exports.createEOI = async (req, res) => {
  const newEOI = new EOI(req.body);
  try {
    const data = await newEOI.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findProjectEOIs = async (req, res) => {
  try {
    let data = await EOI.find({ project_id: req.params.project_id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving EOIs");
  }
};

exports.findUserEOIs = async (req, res) => {
  try {
    let data = await EOI.find({
      user_id: req.params.id,
    });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving EOIs");
  }
};

exports.findOneEOIs = async (req, res) => {
  try {
    let data = await EOI.find({
      _id: req.params.eoi_id,
    });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving EOIs");
  }
};

exports.updateEOI = async (req, res) => {
  try {
    const updatedEOI = await EOI.findByIdAndUpdate(req.params.eoi_id, req.body, {
      new: true,
    });
    res.status(203).send(updatedEOI);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "EOI with Id ${eoiId} was not found!",
      });
    }
    return res.status(500).send({
      message: "Internal server error",
    });
  }
};
