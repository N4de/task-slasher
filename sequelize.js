const Sequelize = require('sequelize');
const User = require('./user');
const databaseKeys = require('./config/database');

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

sequelize.sync()
    .then(() => User.create({
        username: 'janedoe',
        id: new Date(1980, 6, 20)
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });