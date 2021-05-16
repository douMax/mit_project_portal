const { findByIdAndUpdate } = require("../models/application_records.model");
const application_records = require("../models/application_records.model");
const Project = require("../models/project.model");
const Student = require("../models/student.model");

exports.create = async (req, res) => {
  const newapplication_records= new application_records(req.body);

  try {
    const data = await newapplication_records.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findapplication_records = async (req, res) => {
  try {
    let data = await application_records.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving applications");
  }
};

exports.findById = async (req, res) => {
  // retrive ID from the req
  const { applicationId } = req.params;
  //
  try {
    const application_records = await ApplicationRecord.findById(applicationId);
    const project = await Project.findById(application_records.projectId);
    const student = await Student.findById(application_records.studentId);
    const data = {
      ...application_records._doc,
      student: student,
      project: project,
    };
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving group");
  }
};

exports.update= async (req,res)  => {
const {application_recordsId}=req.params
try {
  const updatedapplication_records= await Project.findByIdAndUpdate(application_recordsId,req.body,{
    new:true,
  })
  res.status(203).send(updatedapplication_records);
} catch (err) {
  if(err.kind === "ObjectId") {
    return res.status(404).send ({
      message: 'Application not found with Id ${application_recordsId}',
    });ectI
  }
  console.log(err);
  return res.status(500).send({
    message:'Internal server error',
  });


  
}
};

exports.delete = async(req,res) => {
  const {application_recordId} =req.params
  try {
    const application_record = await Project.findByIdAndRemove(application_recordId)
    return res.status(200).send("Application_record is deleted")
  } catch (err) {
    if(err.kind === "ObjectId") {
      return res.status(404).send ({
        message: 'Application not found with Id ${application_recordId}',
      });
    }
    console.log(err);
    return res.status(500).send({
      message:'Internal server error',
    });
  }
}
//find one and update
