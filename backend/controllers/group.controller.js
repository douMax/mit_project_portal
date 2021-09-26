const Group = require("../models/group.model");
const Student = require("../models/student.model");
const Staff = require("../models/staff.model");

exports.create = async (req, res) => {
  const newGroup = new Group(req.body);

  try {
    const data = await newGroup.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findGroups = async (req, res) => {
  try {
    let data = await Group.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving groups");
  }
};

exports.findById = async (req, res) => {
  // retrive ID from the req
  const { groupId } = req.params;
  try {
    const group = await Group.findById(groupId);
    const students = await Student.find({ groupId: groupId });
    const data = {
      ...group._doc,
      students: students,
    };
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving group");
  }
};

//find one and update

exports.update = async (req, res) => {
  const { groupId } = req.params;

  try {
    const updatedGroup = await Group.findByIdAndUpdate(groupId, req.body, {
      new: true,
    });

    res.status(203).send(updatedGroup);
  } catch (error) {
    res.status(500).send("Error retriving group");
  }
};

//delete

exports.delete = async (req, res) => {
  const { groupId } = req.params;

  try {
    const group = await Group.findByIdAndRemove(groupId);
    return res.status(200).send("group deleted");
  } catch (err) {
    if (err.kind === "objectId") {
      return res.status(404).send({
        message: "group not found with id ${groupId}",
      });
    }
    return res.status(500).send({
      message: "Internal server error.",
    });
  }
};

exports.findSupervisor = async (req, res) => {
  const { groupId } = req.params;

  try {
    const group = await Group.findById(groupId);
    const supervisorId = group.Supervisorid;

    if (supervisorId) {
      const supervisor = await Staff.findById(supervisorId);
      return res.status(201).send(supervisor);
    } else {
      return res.status(404).send({
        message: `Supervisor not found in this group ${group.Groupname}`,
      });
    }
  } catch (err) {
    if (err.kind === "objectId") {
      return res.status(404).send({
        message: "group not found with id ${groupId}",
      });
    }
    return res.status(500).send({
      message: "Internal server error.",
    });
  }
};
