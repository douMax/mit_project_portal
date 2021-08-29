const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./user.model");

const newToken = (user) => {
    return jwt.sign({ id: user.id }, "secret");
}

const register = async (req, res) => {
    const userExists = await User.findOne({ username: req.body.username });
    console.log(req.body)
    try {
        if (userExists) {
            return res.status(400).json({ status: 'failed', message: 'Registration failed, User already exists' });
        }

        else {
            const hashedPassword = await bcrypt.hash(
                req.body.password,
                await bcrypt.genSalt(10)
            );
            const payload = {
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role,
                is_first_time_visited: req.body.is_first_time_visited
            };
            console.log(payload)
            const user = await User.create(payload);

            return res.status(201).json({ status: 'success', message: 'Registration successful', user });
        }
    }

    catch (err) {
        console.log(err)
        res.status(500).json({ status: 'failed', message: 'Registration failed, Something went wrong' });
    }
}

const login = async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username }).exec();

        if (!user) {
            res.status(401).json({ status: 'failed', message: 'Invalid User' });
        }

        else {
            const validPassword = await bcrypt.compare(req.body.password, user.password);

            if (validPassword && req.body.role === user.role) {

                const token = newToken(user);

                return res.status(200).json({ data: { token, user } });
            }
            else return res.status(400).json({ status: "failed", message: "Unauthorized user" });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'failed', message: 'Invalid credentials' });
    }

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

const updatePassword = async (req, res) => {
    const { id } = req.params;
    console.log(id, req.body);

    try {
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            await bcrypt.genSalt(10)
        );
        const user = await User.findByIdAndUpdate(
            id,
            { password: hashedPassword },
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

const updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id, req.body);

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

module.exports = { register, login, getAllUsers, updateUser, updatePassword }