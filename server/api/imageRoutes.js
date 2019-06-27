const express = require('express');
const router = express.Router();
const db = require('../db');
const Image = require('../db/models/images');

// GET (all images) /api/images

// router.get('/', (req, res, next) => {
//   Image.findAll({
//     where: {
//       id: 1,
//     }
//   }).
//     then(images => res.send(images)
//   );
// });

router.get('/', (req, res, next) => {
  Image.findAll().
    then(images => res.send(images)
  );
});

module.exports = router;
