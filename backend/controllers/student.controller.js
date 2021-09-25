const Student = require("../models/student.model");

exports.create = async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const data = await newStudent.save();
    res.status(201).send({ status: "success", message: 'Student Registration Successful', user: data });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};

exports.findAllStudents = async (req, res) => {
  try {
    let data = await Student.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

exports.findEnrolledStudents = async (req, res) => {
  try {
    let data = await Student.find({ is_enrolled_in_capstone_projects: true });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

exports.findOneById = async (req, res) => {
  const { studentid } = req.params;

  try {
    let data = await Student.findById(studentid);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

exports.update = async (req, res) => {
  const { studentid } = req.params;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentid,
      req.body,
      {
        new: true,
      }
    );
    res.status(203).send({ status: true, message: "student record updated", updatedStudent });
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

exports.delete = async (req, res) => {
  const { studentid } = req.params;

  try {
    const student = await Student.findByIdAndRemove(studentid);
    return res.status(200).send("student deleted");
  } catch (err) {
    if (err.kind === "objectId") {
      return res.status(404).send({
        message: "student not found with id ${studentid}",
      });
    }
    return res.status(500).send({
      message: "Internal server error.",
    });
  }
};

exports.getStudent = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await Student.findOne({ "username": username }).exec();
    if (!user) {
      res.status(401).json({ status: 'failed', message: 'Invalid User' });
    }
    else res.status(200).json({ status: "success", user });
  }
  catch (err) {
    res.status(400).json({ status: "failed", message: "User not found" })
  }
};
