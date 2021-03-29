// importing model from department.model
const Department = require("../models/department.model");

//CURD
//Create, Update, Read, and Delete

// create
exports.create = async (req, res) => {
  // req.body is the body of the data in the request
  // {name: "IT", departement_code: "IT"}
  const newDepartment = new Department(req.body);

  // try catch block, use await to force the async method to run first
  try {
    const data = await newDepartment.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// find all departments
exports.findDepartments = async (req, res) => {
  try {
    // .find({}) { } is a filter
    let data = await Department.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};

// find one by id
exports.findOneById = async (req, res) => {
  // params in the url(routes)
  const id = req.params.id;
  try {
    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).send({
        message: `Department not found with id ${departmentId}`,
      });
    }
    res.status(200).send(department);

    // status code: start 2xx: 200 - successful get request. 201 post succesful
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${departmentId}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

// update - PUT request
// find the record by id first and update it.
exports.update = async (req, res) => {
  const { departmentId } = req.params;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(
      departmentId,
      req.body,
      {
        new: true,
      }
    ); // req.body = { departmentName: sdfsdf  }

    res.status(203).send(updatedDepartment);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${departmentId}`,
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
  const { departmentId } = req.params;

  try {
    const department = await Department.findByIdAndRemove(departmentId);
    return res.status(200).send("Departement deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${departmentId}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};
