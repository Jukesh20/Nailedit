const {DataTypes } = require('sequelize');
const sequelize = require('../config');

const Contact = sequelize.define('contacts', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING
  },
  deleted_at: {
    type: DataTypes.STRING
  },
} );

module.exports = Contact;