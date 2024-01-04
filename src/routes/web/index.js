const router = require('express').Router();
const roomRoutes = require('./room-routes');

router.use('/room', roomRoutes);

module.exports = router;
