const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/User');

// user routes: /api/users/

// route controllers
// const getAllUsers = (req, res, next) => {
//   User.findAll()
//   .then(users => res.send(users));
// };

// const getUserByEmail = (req, res, next) => {
//   User.findOne({
//     where: {
//       email: req.body.email,
//     }
//   })
//   .then(user => res.send(user))
// }

// route handlers
// router.get('/', getAllUsers);
// router.get('/email', getUserByEmail);

module.exports = router;
