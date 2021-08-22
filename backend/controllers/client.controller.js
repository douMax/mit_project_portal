const Client = require("../models/client.model");
const Project = require("../models/project.model");

exports.create = async (req, res) => {
  const newClient = new Client(req.body);

  try {
    const data = await newClient.save();
    res.status(201).send({ status: "success", message: 'Client Registration Successful', user: data });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
};

exports.findCompanyClients = async (req, res) => {
  try {
    let data = await Client.find();
    console.log(data);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving clients");
  }
};

exports.findOneById = async (req, res) => {
  const { clientId } = req.params;

  try {
    const client = await Client.findById(clientId);
    const projects = await Project.find({ clientId: clientId });

    if (!client) {
      return res.status(404).send({
        message: "Client not found with ID {clientId}",
      });
    }

    const data = {
      ...client._doc,
      projects: projects,
    };

    res.status(200).send(data);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: "client not found with ID(clientId)",
      });
    }
    console.log(err);
    return res.status(500).send({
      message: "internal server error.",
    });
  }
};

exports.update = async (req, res) => {
  const { clientId } = req.params;
  // console.log(req.body)
  try {
    const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
      new: true,
    });

    res.status(203).send({ status: true, message: "record updated" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Client not found with id ${clientId}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      status: false,
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

exports.getClient = async (req, res) => {
  const { username } = req.body;
  console.log(username)
  try {
    const user = await Client.findOne({ "username": username }).exec();
    if (!user) {
      res.status(401).json({ status: 'failed', message: 'Invalid User' });
    }
    else res.status(200).json({ status: "success", user });
  }
  catch (err) {
    res.status(400).json({ status: "failed", message: "User not found" })
  }
};
