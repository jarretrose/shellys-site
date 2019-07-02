const sequelize = require('../server/db/index');
const Users = require('../server/db/models/User');

const addUser = user => Users.create(user);

const getUserByLogin = login => Users.findOne({where: {login}});

module.exports = {
  addUser,
  getUserByLogin
}