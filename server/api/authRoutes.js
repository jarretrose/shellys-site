const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/User');
const bcrypt = require('bcrypt')

router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email.toLowerCase(),
    }
  })
    .then(user => {
      if (!user) {
        const err = new Error('Incorrect username or password.');
        err.status = 401;
        next(err)
      } 
      if (user) {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (result === true) {
            req.session.userId = user.id
            res.json(user);
          } else {
            const err = new Error('Incorrect username or password.')
            err.status = 401;
            next(err)
          }
        })
      }
    })
    .catch(next)
})

const userNotFound = next => {
  const err = new Error('Not found.');
  err.status = 404;
  // next(err)
};

router.get('/me', (req, res, next) => {
  if (!req.session.userId) {
    userNotFound(next)
  } else {
    User.findByPk(req.session.userId)
      .then(user => user ? res.json(user) : userNotFound(next))
      .then(() => console.log('User found!'))
      .catch(err => console.log(err))
  }
})

router.delete('/logout', (req, res, next) => {
  req.session.destroy()
  res.status(204).end()
})

module.exports = router;
