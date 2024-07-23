const { getTransactionsByUserId, createTransaction } = require('../models/transactionModel');

const getTransactions = (req, res) => {
    const userId = req.userId;

    getTransactionsByUserId(userId, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(results);
    });
};

const addTransaction = (req, res) => {
    const userId = req.userId;
    const { type, category, amount, date } = req.body;

    createTransaction(userId, type, category, amount, date, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id: results.insertId, type, category, amount, date });
    });
};

module.exports = { getTransactions, addTransaction };
