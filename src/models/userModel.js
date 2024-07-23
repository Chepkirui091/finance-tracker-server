const db = require('../config/db');

const createUser = (email, hashedPassword, callback) => {
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], callback);
};

const findUserByEmail = (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

module.exports = { createUser, findUserByEmail };
