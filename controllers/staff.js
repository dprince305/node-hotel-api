const staffRoleModel = require("../model/staffRole")

const staffGet = async (req, res) => {
    const staffData = await staffRoleModel.find({})
    res.status(200).json({
        "msg": "Staff Details",
        "data": staffData
    })
}
const staffPost = async (req, res) => {
    const { staffRole, staffDescription } = req.body
    const staffData = new staffRoleModel({
        staffRole, staffDescription
    })
    await staffData.save()
    res.status(200).json({
        "msg": "Staff Post",
        "data": staffData
    })
}

module.exports = {
    staffGet,
    staffPost
}