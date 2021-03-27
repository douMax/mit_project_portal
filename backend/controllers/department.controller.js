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
    let data = await Department.findById(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};

//find one and update
// update - PUT request
// find the record by id first and update it.
exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // req.body = { departmentName: sdfsdf  }

    res.status(203).send(updatedDepartment);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

// delete
// find it first and delete.

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const department = await Department.findByIdAndRemove(id);
    return res.status(200).send("Departement deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};
