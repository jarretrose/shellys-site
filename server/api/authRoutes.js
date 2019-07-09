const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const _saltRounds = parseInt(process.env.saltRounds);

// routes mounted on: /api/auth

// test if route is working
// router.get('/', (req, res) => {
//   res.json({
//     message: 'get route working'
//   });
// });

// cannot log in to the app without a valid email and password
// cannot log into the app with a blank email or password
const validateUser = (user) => {

  const validEmail = typeof user.email === 'string' &&
    user.email.trim() != '';

  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
}

// check to see if email is already in use
function checkForUser(email) {
  let results = User.findOne({
    where: {
      email: email,
    }
  });
  return results;
};

// signup for a local account
router.post('/signup', async (req, res, next) => {

  let doesUserExist = await checkForUser(req.body.email.toLowerCase());
  let isUserValid = await validateUser(req.body);

  // if the info is valid and the email is NOT already in use
  if (isUserValid && !doesUserExist) {
    const newUser = {
      email: req.body.email,
      password: bcrypt.hashSync('123456', _saltRounds)
    }
    User.create(newUser).then(() => res.sendStatus(200));
  } else {
    next(new Error('Invalid User.'));
  };

});

// sign in with a local account
router.post('/signin', async (req, res, next) => {
  
})

module.exports = router;
