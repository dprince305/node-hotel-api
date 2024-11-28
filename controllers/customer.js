const customerModel = require("../model/customer")

const customerGet = async (req, res) => {
    const customer = await customerModel.find({})
    res.status(200).json({
        "message": "Customer Details",
        "data": customer
    })
}
const customerPost = async (req, res) => {

    const { name, phone, email } = req.body

    const customer = new customerModel({
        name,
        phone,
        email
    })
    await customer.save()

    res.status(200).json({
        "message": "Customer Added",
        "data": customer
    })

}
module.exports = {
    customerGet,
    customerPost
}