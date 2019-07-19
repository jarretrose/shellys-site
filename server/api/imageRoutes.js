const express = require('express');
const router = express.Router();
const db = require('../db');
const Image = require('../models/Image');

// ROUTE CONTROLLERS
const getAllImages = (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
};

const getFilteredImages = (req, res, next) => {
  Image.findAll({
    where: {
      category: req.params.category
    }
  })
  .then(images => res.send(images))
};

// ROUTE HANDLERS mounted on /api/images/
router.get('/', getAllImages);
router.get('/:category', getFilteredImages);

module.exports = router;
