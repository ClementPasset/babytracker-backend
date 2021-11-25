const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();

const reportRoutes = require('./routes/reports');
const userRoutes = require('./routes/user');

mongoose.connect(process.env.DB_CONNEXION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à la base de données réussie.'))
    .catch(() => console.log('La connexion à la base de données a échoué.'));

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/reports/', reportRoutes);
app.use('/api/user/', userRoutes);

module.exports = app;