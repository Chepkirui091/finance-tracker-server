const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'daphne',
    password: 'Chepkirui01.', // replace with your MySQL password
    database: 'finance_tracker'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = db;
