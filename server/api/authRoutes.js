const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/User');
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

// I don't think I am properly erroring out of failed login attempts, need to look into that later
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
      email: email.toLowerCase()
    }
  })
    .then(user => {
      if (!user) return userNotFound(next)
      if (user) authCheck(user, password)
      return user
    })
    .then(user => {
      if (!user.isAuthed) return userNotFound(next)
      if (user.isAuthed) req.session.userId = user.id
      return user
    })
    .then(user => {
      if (!req.session.userId) return userNotFound(next)
      if (req.session.userId) return res.json(user)
    })
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

const editUser = (req, res, next) => {
  User.findByPk(req.params.id)
    .then(response => response.update(req.body))
    .then(response => res.send(response))
    .catch(next)
}

const getAboutInfo = (req, res, next) => {
  User.findOne({
    where: {
      email: 'bongem27@gmail.com'
    }
  })
  .then(user => res.send(user.about));
};


// ROUTE HANDLERS

// route handlers
router.delete('/logout', userLogOut)
router.get('/me', checkForUser)
router.post('/login', userLogIn)
router.get('/aboutme', getAboutInfo);
router.put('/:id', editUser)

module.exports = router;
