const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../db/models/User');
const checkAuth = require('../middlewares/auth')

// user routes: /api/users/

// example of a route that requires authentication -- not useful later
const getAllUsers = (req, res, next) => {
  User.findAll()
  .then(users => res.send(users));
};

router.get('/', checkAuth, getAllUsers);


module.exports = router;
