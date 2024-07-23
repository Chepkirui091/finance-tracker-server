const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err); // Log the error for debugging
            return res.status(403).json({ error: 'Failed to authenticate token' });
        }

        req.userId = user.id;
        next();
    });
};

module.exports = { authenticateToken };
