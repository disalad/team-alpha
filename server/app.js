// Import libraries and files
const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const idxDataRoute = require('./api/routes/idxData.routes');

// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/data', idxDataRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'URL Not Found' });
});

module.exports = app;
