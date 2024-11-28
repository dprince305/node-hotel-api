const mongoose = require("mongoose");


const tableSchema = new mongoose.Schema({
    tableNo: {
        type: String,
        required: true
    },
    tableSeat: {
        type: String,
        required: true
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "booking",
        required: true
    }
})

module.exports = mongoose.model("table", tableSchema)