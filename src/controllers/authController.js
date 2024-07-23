const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');

const register = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    createUser(email, hashedPassword, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id: results.insertId, email });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    findUserByEmail(email, (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send('Invalid password');
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

        res.send({ id: user.id, email: user.email, token });
    });
};

module.exports = { register, login };
