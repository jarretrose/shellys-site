const express = require('express');
const router = express.Router();
const db = require('../db');
const Image = require('../db/models/Image');

router.get('/', (req, res, next) => {
  Image.findAll().
    then(images => res.send(images)
  );
});

module.exports = router;
