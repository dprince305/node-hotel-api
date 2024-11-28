const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    staffRole: {
        type: String,
        required: true
    },
    staffDescription: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("staff", staffSchema)