const express = require('express');
const router = express.Router();
const User = require('../models/User');

// routes mounted on: /api/auth

// test if route is working
// router.get('/', (req, res) => {
//   res.json({
//     message: 'get route working'
//   });
// });

// cannot log in to the app without a valid email and password
// cannot log into the app with a blank email or password
// make certain that email is not already in use
const validateUser = (user) => {

  const validEmail = typeof user.email === 'string' &&
    user.email.trim() != '';

  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
}

function checkForUser(email) {
  let results = User.findOne({
    where: {
      email: email,
    }
  });
  return results;
};

router.post('/signup', async (req, res, next) => {

  let doesUserExist = await checkForUser(req.body.email.toLowerCase());
  let isUserValid = await validateUser(req.body);

  if (isUserValid && !doesUserExist) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };
    res.json({
      message: 'user is valid',
      newUser
    });
  } else {
    next(new Error('Invalid User.'));
  };

});

module.exports = router;
