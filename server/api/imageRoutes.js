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

const addImage = (req, res, next) => {
  Image.create(req.body)
    .then(response => res.send(response))
    .catch(next)
}

const deleteImage = (req, res, next) => {
  Image.findByPk(req.params.id)
    .then(response => response.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
}

const editImage = (req, res, next) => {
  Image.findByPk(req.params.id)
    .then(response => response.update(req.body))
    .then(response => res.send(response))
    .catch(next)
}

// ROUTE HANDLERS mounted on /api/images/
router.get('/', getAllImages);
router.post('/', addImage);
router.delete('/:id', deleteImage);
router.put('/:id', editImage);
router.get('/:category', getFilteredImages);

module.exports = router;
