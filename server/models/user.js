'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    googleId: Sequelize.STRING
  });
};