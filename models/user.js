const {DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  phone_number: {
    type: DataTypes.STRING,
    unique: true

  },
  password: {
    type: DataTypes.STRING
  },
} );

module.exports = User;