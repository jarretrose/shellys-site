const express = require('express');
const router = express.Router();
const db = require('../db');
const User = require('../db/models/users');

// GET (all users) /api/images

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users)
    );
});

module.exports = router;
