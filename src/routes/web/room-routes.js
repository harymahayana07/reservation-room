const express = require('express');
const router = express.Router();
const roomController = require('../../controllers/roomController');

// Endpoint untuk mendapatkan semua Room
router.get('/', roomController.getAllRooms);

// Endpoint untuk mendapatkan satu Room berdasarkan ID
router.get('/:id', roomController.getRoomById);

// Endpoint untuk menambahkan Room baru
router.post('/', roomController.createRoom);

// Endpoint untuk memperbarui Room berdasarkan ID
router.put('/:id', roomController.updateRoom);

// Endpoint untuk menghapus Room berdasarkan ID
router.delete('/:id', roomController.deleteRoom);

module.exports = router;
