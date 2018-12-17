const Sequelize = require('sequelize');
// const User = require('./server/models/user');
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

const User = sequelize.define("testdude", {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
});

sequelize.sync()
    .then(() => {
        console.log('things have been synced yes');
        return User.create({
            name: 'John',
            description: 'cool dude'
        });
    });

    User.findAll().then(users => {
        console.log(users);
      });