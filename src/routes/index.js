const express = require('express');
const webRoutes = require('./web');
const router = express.Router();

router.use('/web', webRoutes);

module.exports = router;
