const Student = require("../models/Student.model");

exports.create = async (req, res) => {
  const newStudent = new Student(req.body);

  try {
    const data = await newStudent.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findEnrolledStudents = async (req, res) => {
  try {
    let data = await Student.find({is_enrolled_in_capstone_projects: true});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

exports.findOnById = async (req, res) => {
 
  const id = req.params.id;
  
  try {
    let data = await Student.findOne({ id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving student");
  }
};

//find one and update
