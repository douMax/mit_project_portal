const { findByIdAndUpdate } = require("../models/project.model");
const Project = require("../models/project.model");

exports.create = async (req, res) => {
  const newProject= new Project(req.body);

  try {
    const data = await newProject.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findProjects = async (req, res) => {
  try {
    let data = await Project.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving projects");
  }
};

exports.findOneById = async (req, res) => {
  // retrive ID from the req
  const id = req.params.id;
  //
  try {
    let data = await Project.findOne({ id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving project");
  }
};

exports.update= async (req,res)  => {
const {projectsId}=req.params
try {
  const updatedproject= await Project.findByIdAndUpdate(projectsId,req.body,{
    new:true,
  })
  res.status(203).send(updatedproject);
} catch (err) {
  if(err.kind === "ObjectId") {
    return res.status(404).send ({
      message: 'Project not found with Id ${projectId}',
    });
  }
  console.log(err);
  return res.status(500).send({
    message:'Internal server error',
  });


  
}
};

exports.delete = async(req,res) => {
  const {projectsId} =req.params
  try {
    const project = await Project.findByIdAndRemove(projectsId)
    return res.status(200).send("Project is deleted")
  } catch (err) {
    if(err.kind === "ObjectId") {
      return res.status(404).send ({
        message: 'Project not found with Id ${projectId}',
      });
    }
    console.log(err);
    return res.status(500).send({
      message:'Internal server error',
    });
  }
}
//find one and update
