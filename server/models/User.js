const Sequelize = require('sequelize')
const db = require('../db');
const bcrypt = require('bcrypt')
const SALT_ROUNDS = process.env.SALT_ROUNDS
const uuid = require('uuid/v4')

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
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
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

// User.beforeCreate((user, opt) => {
//   return bcrypt.hash(user.password, SALT_ROUNDS)
//     .then(hash => user.password = hash)
//     .catch(err => { throw new Error() })
// })

// User.beforeCreate((user, opt) => {
//   return user.id = uuid();
// })

module.exports = User;
