const jwt = require("jsonwebtoken");

const User = require("./user.model");

const newToken = (user) => {
    return jwt.sign({ id: user.id }, "secret");
}

const register = async (req, res) => {
    console.log(req.body)
    const userExists = await User.findOne({ username: req.body.username });

    try {
        if (userExists) {
            return res.status(400).json({ status: 'failed', message: 'Registration failed, User already exists' });
        }

        else {
            const user = await User.create(req.body);

            return res.status(201).json({ status: 'success', message: 'Registration successful' });
        }
    }

    catch (err) {
        res.status(500).json({ status: 'failed', message: 'Registration failed, User already exists' });
    }
}

const login = async (req, res) => {

    let user;

    try {
        user = await User.findOne({ username: req.body.username }).exec();

        // console.log(user.role)

        if (!user) {
            res.status(401).json({ status: 'failed', message: 'Invalid User' });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'failed', message: 'Something went wrong' });
    }


    try {
        const match = await user.checkPassword(req.body.password);

        if (!match) {
            res.status(401).json({ status: 'failed', message: 'Invalid Password' });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'failed', message: 'Something went wrong' });
    }

    if (req.body.role === user.role) {

        const token = newToken(user);

        return res.status(200).json({ data: { token, user } });
    }
    else res.status(400).json({ status: "failed", message: "Required fields missing" });
};


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ status: 'success', users });
    }
    catch (err) {
        res.status(500).json({ status: 'failed', message: err });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    try {
        const user = await User.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );
        res.status(200).send({ status: "success", message: "User Record Updated", user });
    }

    catch (err) {
        res.status(500).json({ status: "failed", message: err });
    }
};

module.exports = { register, login, getAllUsers, updateUser }