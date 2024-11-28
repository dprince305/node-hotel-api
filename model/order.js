const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    foodType: {
        type: String,
        require: true
    },
    staffMember: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staffMember',
        required: true
    },
    tableDetailes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "table",
        require: true

    },

});

module.exports = mongoose.model("order", orderSchema)