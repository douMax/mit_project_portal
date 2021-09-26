const testUser = require("./testusers.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
    //Check if user exits. If it does, return an error message.
    const userExists = await testUser.findOne({ email: req.body.email });
    if (userExists) return res.status(400).send("User already exists.");
    //Create a salt using bcrypt and hash the password using the salt.
    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //Create and save the new user in database.
    const testuser = new testUser({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await testuser.save();
        res.send("User " + req.body.name + " was created.");
    } catch (err) {
        //If errors found, return the error.
        res.status(400).send(err);
    }
};

exports.login = async (req, res) => {
    //Check if user exists. If it does not, return error message.
    const userExists = await testUser.findOne({ email: req.body.email });
    if (!userExists) return res.status(400).send("User not yet registered.");
    //Compare the password the user has entered with the password stored in database.
    const validPassword = await bcrypt.compare(
        req.body.password,
        userExists.password
    );
    //If password does not exist, return error message.
    if (!validPassword) return res.status(400).send("Incorrect password.");
    //Create JWT token using the user's ID.
    const authtoken = jwt.sign(
        { _id: userExists._id },
        "S0m3R@1d0M6aR8AgE789abc" //Secret that will be used to genetate the JWT token. Can be placed in another file later.
    );
    //Send the token in the response's header.
    res.header("AUTH_TOKEN", authtoken).send(authtoken);
};

exports.findAll = async (req, res) => {
    try {
        const testUsers = await testUser.find({});
        res.status(200).send(testUsers);
    } catch (error) {
        res.status(500).send("Error retriving departments");
    }
};
