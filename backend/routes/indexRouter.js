const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js');

router.get('/test', indexController.test);

module.exports = router;