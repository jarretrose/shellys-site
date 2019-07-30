const Sequelize = require('sequelize')
const db = require('../db');

const Image = db.define('image', {
  name: {
    type: Sequelize.STRING, allowNull: false,
  },
  category: {
    type: Sequelize.STRING, allowNull: false,
  },
  imageURL: {
    type: Sequelize.TEXT, allowNull: false,
  },
});

module.exports = Image;