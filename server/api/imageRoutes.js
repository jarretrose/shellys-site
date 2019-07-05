const express = require('express');
const router = express.Router();
const db = require('../db');
const Image = require('../models/Image');

// image routes: /api/images/

const getAllImages = (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
};

router.get('/', getAllImages);

module.exports = router;
