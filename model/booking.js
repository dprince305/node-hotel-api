
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    member: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: true
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'table',
        required: true
    }
})

module.exports = mongoose.model("booking", bookingSchema)