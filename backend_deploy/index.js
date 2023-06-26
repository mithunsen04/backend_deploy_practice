require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./app/routes/authRoutes');
const postRoutes = require('./app/routes/postRoutes');

const app = express();
const port =  3000;

// Connect to MongoDB
connectDB();

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/users', authRoutes);
app.use('/posts', postRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
