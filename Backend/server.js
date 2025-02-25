const express = require('express');
const connectDB = require('./Config/db');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

require('dotenv').config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
