const Staff = require("../models/staff.model");

  const newStaff = new Staff(req.body);

  try {
    const data = await newStaff.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findStaff = async (req, res) => {
  try {
    let data = await Staff.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving staff");
  }
};

exports.findOneById = async (req, res) => {
  // retrive ID from the req
  const id = req.params.id;
  //
  try {
    let data = await Staff.findOne({ id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving staff");
  }
};

//find one and update
