const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    // these are wrong fix pls
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    username: Sequelize.STRING
});

module.exports = {
    User,
};