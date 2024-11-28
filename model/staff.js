const mongoose = require("mongoose");

const staffMemberSchema = new mongoose.Schema({
    staffName: {
        type: String,
        required: true
    },
    staffSkill: {
        type: String,
        required: true
    },
    staffSalary: {
        type: String,
        required: true
    },
    staffRole: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'staff',
        required: true
    },
})
module.exports = mongoose.model("staffMember", staffMemberSchema)