const sequelize = require('../db/index');
const Users = require('../db/models/User');

const addUser = user => Users.create(user);

const getUserByLogin = login => Users.findOne({where: {login}});

module.exports = {
  addUser,
  getUserByLogin
}