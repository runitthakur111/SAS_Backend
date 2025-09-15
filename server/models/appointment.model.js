const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Appointment = sequelize.define('Appointment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Appointment;
