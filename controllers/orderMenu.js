const orderMenuModel = require ("../model/orderMenu.js")
const orderModel = require ("../model/order.js")

const orderMenuGet = async (req, res) => {

    const orderMenuData = await orderMenuModel.find({}).populate("orderDetailes")

    res.status(200).json({
        "msg": "Order Menu Details",
        "data": orderMenuData
    })
}


const orderMenuPost = async (req, res) => {

    const { foodType, orderDetailes } = req.body

    const orderMenuData = new orderMenuModel({
        foodType, orderDetailes
    })
    await orderMenuData.save()
    res.status(200).json({
        "msg": "Order Menu Post",
        "data": orderMenuData
    })


}

module.exports = {
    orderMenuGet,
    orderMenuPost
}