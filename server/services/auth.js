// this handles JWT authentication
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../db/models/User');
const dotenv = require('dotenv');
dotenv.config();

const authenticate = params => {
  return Users.findOne({
    where: {
      login: params.login
    },
    raw: true
  }).then(user => {
    if (!user)
      throw new Error('Authentication failed. User not found.');
    if (!bcrypt.compareSync(params.password || '', user.password))
      throw new Error('Authentication failed.');
    const payload = {
      login: user.login,
      id: user.id,
      time: new Date()
    };

    const token = jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: process.env.tokenExpireTime
    });
    return token;
  });
};

module.exports = {
  authenticate
}