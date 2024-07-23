const express = require('express');
const cors = require('cors');
const swagger = require('./src/swagger/swagger');
const authRoutes = require('./src/routes/authRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');

const app = express();
app.use(express.json());
app.use(cors());

swagger(app);

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
