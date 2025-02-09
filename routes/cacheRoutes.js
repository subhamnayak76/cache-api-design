
const express = require('express');
const { storeCache, getCache, deleteCache } = require('../controllers/cacheController');

const router = express.Router();

router.post('/cache', storeCache);
router.get('/cache/:key', getCache);
router.delete('/cache/:key', deleteCache);

module.exports = router;
