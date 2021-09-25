const Staff = require("../models/staff.model");
const Topic = require("../models/topic.model");

exports.create = async (req, res) => {
  const newStaff = new Staff(req.body);

  try {
    const data = await newStaff.save();
    res.status(201).send({ status: "success", message: 'Staff Registration Successful', user: data });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};

exports.findStaff = async (req, res) => {
  try {
    let data = await Staff.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving staff");
  }
};

exports.findOneById = async (req, res) => {
  const id = req.params.id;
  try {
    let data = await Staff.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving staff");
  }
};
exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedstaff = await Staff.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(203).send(updatedstaff);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${id}`,
      });
    }
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const staff = await Staff.findByIdAndRemove(id);
    return res.status(200).send("Staff deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Staff not found with id ${id}`,
      });
    }
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

exports.findStaffTopics = async (req, res) => {
  const { id } = req.params;

  try {
    const staff = await Staff.findById(id);
    let topics = [];
    if (staff.topics) {
      topics = await Topic.find().where("_id").in(staff.topics).exec();
      return res.status(200).send(topics);
    } else {
      return res.status(400).send("No topics found with the staff.");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Staff not found with id ${id}`,
      });
    }
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

exports.getStaff = async (req, res) => {
  const { username } = req.body;
  (username)
  try {
    const user = await Staff.findOne({ "username": username }).exec();
    if (!user) {
      res.status(401).json({ status: 'failed', message: 'Invalid User' });
    }
    else res.status(200).json({ status: "success", user });
  }
  catch (err) {
    res.status(400).json({ status: "failed", message: "User not found" })
  }
};
