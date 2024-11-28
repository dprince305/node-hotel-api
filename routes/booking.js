const express = require('express');
const { bookingGet, bookingPost } = require('../controllers/booking');

const booking = express.Router()

booking.get("/", bookingGet)
booking.post("/", bookingPost)

module.exports = booking;