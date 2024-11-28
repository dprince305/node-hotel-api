const staffMemberModel = require("../model/staffRole");

const staffMemberGet = async (req, res) => {

    const staffMember = await staffMemberModel.find({}).populate("staffRole")

    res.status(200).json({
        "msg": "Staff Member Details",
        "data": staffMember
    })
}

const staffMemberPost = async (req, res) => {
    const { staffName, staffSkill, staffSalary, staffRole } = req.body

    const staffMember = new staffMemberModel({
        staffName, staffSkill, staffSalary, staffRole
    })

    await staffMember.save()
    res.status(200).json({
        "msg": "Staff Member Post",
        "data": staffMember
    })
}

module.exports = {
    staffMemberGet,
    staffMemberPost
}