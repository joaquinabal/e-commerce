const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');

// Index
router.get('/', mainController.index);

// Contact Form
router.get('/contact', mainController.contact)

module.exports = router;