const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/index');
const dotenv = require('dotenv');
dotenv.config();

const saltRounds = parseInt(process.env.saltRounds);

const login = (req, res) => {
  return authService.authenticate(req.body)
    .then(token => {
      res.send({
        success: true,
        data: { token }
      });
    })
    .catch(err => {
      res.send({
        success: false, 
        message: err.message // need to fix later
      });
    })
};

const register = (req, res) => {
  const login = req.body.login;
  return userService.getUserByLogin(req.body.login || '')
    .then(exists => {
      if (exists) {
        return res.send({
          success: false,
          message: 'Registration failed. User already exists.'
        });
      }
      const user = {
        name: req.body.name,
        login: req.body.login,
        password: bcrypt.hashSync(req.body.password, saltRounds)
      }
      return userService.addUser(user)
        .then(() => res.send({ success: true }))
    });
};

module.exports = {
  login, 
  register
}
