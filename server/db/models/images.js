const Sequelize = require('sequelize')
const db = require('../index');

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
  cols: {
    type: Sequelize.INTEGER, allowNull: true,
  }
});

module.exports = Image;