const tableModel = require ("../model/table")

const tableGet = async (req, res) => {

    const tableData = await tableModel.find({}).populate("booking")
    res.status(200).json({
        "msg": "Table Details",
        "data": tableData
    })
}
const tablePost = async (req, res) => {

    const { tableSeat, tableNo, booking } = req.body

    const tableData = new tableModel({
        tableSeat, tableNo, booking
    })
    await tableData.save()

    res.status(200).json({
        "msg": "Table Post",
        "data": tableData
    })
}

module.exports = {
    tableGet,
    tablePost
}