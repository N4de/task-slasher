const express = require('express');
const keys = require('./config/keys');
require('./sequelize');

const app = express();



const PORT = process.env.PORT || 5000;
app.listen(PORT);