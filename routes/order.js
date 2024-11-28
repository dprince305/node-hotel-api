const express = require("express")
const { orderGet, orderPost } = require("../controllers/order.js")

const order = express.Router()

order.get("/", orderGet)
order.post("/", orderPost)

module.exports = order