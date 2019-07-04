const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/auth');
const userService = require('../services/index');
const dotenv = require('dotenv');
dotenv.config();

const _saltRounds = parseInt(process.env.saltRounds);

const login = (req, res) => {
  return authService.authenticate(req.body)
    .then(token => {
      res.send({
        success: true,
        data: { token },
        message: 'Log in successful.'
      });
    })
    .catch(err => {
      console.log(err)
      res.status(401).send({
          success: false, 
          message: 'Log in failed to authenticate.'
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
        password: bcrypt.hashSync(req.body.password, _saltRounds)
      }
      return userService.addUser(user)
        .then(() => res.send({ success: true }))
    });
};

// auth routes: /api/auth/login
router.post('/login', login);
router.post('/register', register);

module.exports = router;