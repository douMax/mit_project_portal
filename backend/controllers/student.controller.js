const Student = require("../models/student.model");

exports.create = async (req, res) => {
  const newStudent = new Student(req.body);

  try {
    const data = await newStudent.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
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

exports.findOnById = async (req, res) => {
  const { studentid } = req.params;

  try {
    let data = await Student.findById(studentid);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

//update - PUT Request
//find the record by id first and update it.

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

    res.status(203).send(updatedStudent);
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
    console.log(err);
    return res.status(500).send({
      message: "Internal server error.",
    });
  }
};
