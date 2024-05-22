const express = require('express');
const tinyUrlController = require('../controllers/tinyUrlController');

const router = express.Router();

router.post('/get', tinyUrlController.getUrlByCode);
router.post('/create', tinyUrlController.createTinyUrl);

module.exports = router;