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
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};

exports.findOneById = async (req, res) => {
  const { departmentId } = req.params;
  try {
    let data = await Department.findById(departmentId);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};

exports.update = async (req, res) => {
  const { departmentId } = req.params;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(
      departmentId,
      req.body,
      {
        new: true,
      }
    );

    res.status(203).send(updatedDepartment);
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
  const { departmentId } = req.params;

  try {
    const department = await Department.findByIdAndRemove(departmentId);
    return res.status(200).send("Departement deleted");
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
