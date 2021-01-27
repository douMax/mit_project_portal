const Department = require("../models/department.model");

exports.create = async (req, res) => {
  const newDepartment = new Department(req.body);

  try {
    const data = await newDepartment.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findDepartments = async (req, res) => {
  try {
    let data = await Department.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};

exports.findOneById = async (req, res) => {
  // retrive ID from the req
  const id = req.params.id;
  //
  try {
    let data = await Department.findOne({ id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};
