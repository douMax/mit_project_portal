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
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving departments");
  }
};

// find one by Id
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

//find one and update
