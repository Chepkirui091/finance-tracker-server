const db = require('../config/db');

const getTransactionsByUserId = (userId, callback) => {
    db.query('SELECT * FROM transactions WHERE user_id = ?', [userId], callback);
};

const createTransaction = (userId, type, category, amount, date, callback) => {
    db.query('INSERT INTO transactions (user_id, type, category, amount, date) VALUES (?, ?, ?, ?, ?)', [userId, type, category, amount, date], callback);
};

module.exports = { getTransactionsByUserId, createTransaction };
