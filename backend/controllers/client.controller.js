const Client = require("../models/client.model");
const Project = require("../models/project.model");

exports.create = async (req, res) => {
  const newClient = new Client(req.body);

  try {
    const data = await newClient.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findCompanyClients = async (req, res) => {
  try {
    let data = await Client.find({is_an_agent: true});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving clients");
  }
};

exports.findOneById = async (req, res) => {
  try {
    let data = await Project.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving Projects");
  }
};


exports.findClientsProjects = async (req, res) => {
  const {clientId} = req.params;
  
  try {
    let projects = await Project.find({client_id: clientId })


    res.status(201).send(projects);
  } catch (error) {
    res.status(500).send("Error retriving projects based on the clientId");
  }

}

exports.update = async (req, res) => {
  const { clientId } = req.params;

  try {
    const updatedClient = await Client.findByIdAndUpdate(
      clientId,
      req.body,
      {
        new: true,
      }
    ); 

    res.status(203).send(updatedClient);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Client not found with id ${clientId}`,
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
  const { clientId } = req.params;

  try {
    const client = await Client.findByIdAndRemove(clientId);
    return res.status(200).send("Client deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Client not found with id ${clientId}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

