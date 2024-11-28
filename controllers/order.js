const orderModel = require("../model/order")
const orderGet = async (req, res) => {
    const orderData = await orderModel.find({}).populate({ path: "staffMember", populate: { path: "staffRole" } }).populate({ path: "tableDetailes", populate: { path: "booking", populate: { path: "customer" } } })

    res.status(200).json({
        "msg": "Order Details",
        "Data": orderData
    })
}

const orderPost = async (req, res) => {
    const { foodType, staffMember, tableDetailes } = req.body

    const orderData = new orderModel({
        foodType, staffMember, tableDetailes
    })

    await orderData.save()

    res.status(201).json({
        "msg": "Order Posted",
        "Data": orderData
    })

}

module.exports = {
    orderGet,
    orderPost
}