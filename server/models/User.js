const Sequelize = require('sequelize')
const db = require('../db');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // email will be used to login to services
  email: {
    type: Sequelize.STRING, 
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: "Must use a valid email address."
      }
    }
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false,
    validate: {
      len: {
        args: 6,
        msg: "Password must be at least six (6) characters."
      }
    }
  }
});

module.exports = User;
