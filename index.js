const express = require('express');
const databaseKeys = require('./config/database');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);



const Sequelize = require('sequelize');
const sequelize = new Sequelize(databaseKeys.databaseName, databaseKeys.databaseUsername, databaseKeys.databasePassword, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });