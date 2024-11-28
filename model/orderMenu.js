const mongoose = require("mongoose");

const orderMenuSchema = new mongoose.Schema({
    foodType: {
        type: String,
        required: true
    },
    orderDetailes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
        required: true
    }
})

module.exports = mongoose.model("orderMenu", orderMenuSchema)
