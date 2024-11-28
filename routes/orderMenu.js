const express = require('express');
const { orderMenuGet, orderMenuPost } = require("../controllers/orderMenu.js");
const order = require("../model/orderMenu.js");

const orderMenu = express.Router();

orderMenu.get("/", orderMenuGet)
orderMenu.post("/", orderMenuPost)

module.exports = orderMenu