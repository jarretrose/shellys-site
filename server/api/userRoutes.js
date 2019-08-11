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


// ROUTE HANDLERS
// router.get('/', getAllUsers);

module.exports = router;
