// Import libraries and files
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const adminRoute = require('./api/routes/admin.routes');

// DB init
mongoose.connect(process.env.MONGODB_URI, err => {
    if (err) {
        throw new Error('Error while connecting to the database');
    }
    console.log('Connected to the database');
});

// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/admins', adminRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'URL Not Found' });
});

module.exports = app;
