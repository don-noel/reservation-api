const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, bookingController.createBooking);
router.get('/', verifyToken, bookingController.getAllBookings);
router.get('/:id', verifyToken, bookingController.getBookingById);
router.put('/:id', verifyToken, bookingController.updateBooking);
router.delete('/:id', verifyToken, bookingController.deleteBooking);

module.exports = router;