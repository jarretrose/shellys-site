const Sequelize = require('sequelize')
const db = require('../index');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING, allowNull: false
  },
  email: {
    type: Sequelize.STRING, allowNull: false
  },
});

module.exports = User;
