const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/User');
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

const userNotFound = next => {
  return next({ status: 401 })
};

const authCheck = (user, password) => {
  user.isAuthed = bcrypt.compareSync(password, user.password)
  return user
}

const userLogIn = (req, res, next) => {
  const { email, password } = req.body
  User.findOne({
    where: {
      email: email.toLowerCase(),
      password: password,
    }
  })
    .then(user => !user ? userNotFound(next) : authCheck(user, password))
    .then(user => {
      !user.isAuthed ? userNotFound(next) : req.session.userId = user.id
      return user
    })
    .then(user => req.session.userId ? res.json(user) : userNotFound(next))
    .catch(next)
}

const checkForUser = (req, res, next) => {
  if (!req.session.userId) userNotFound(next)
  else {
    User.findByPk(req.session.userId)
      .then(user => user ? res.json(user) : userNotFound(next))
      .catch(next)
  }
}

const userLogOut = (req, res, next) => {
  req.session.destroy()
  res.status(204).end()
}

// route handlers
router.delete('/logout', userLogOut)
router.get('/me', checkForUser)
router.post('/login', userLogIn)

module.exports = router;
