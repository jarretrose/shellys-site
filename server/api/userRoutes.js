const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../models/User');

// user routes: /api/users/

// route controllers
const getAboutInfo = (req, res, next) => {
  User.findOne({
    where: {
      email: 'bongem27@gmail.com'
    }
  })
  .then(user => res.send(user.about));
};


// ROUTE HANDLERS
router.get('/aboutme', getAboutInfo);

module.exports = router;
