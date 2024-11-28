const mongoose = require("mongoose");

const orderTypeSchema = new mongoose.Schema({
    orderType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderType",
        require: true
    }

})

module.exports = mongoose.model("orderType", orderTypeSchema)