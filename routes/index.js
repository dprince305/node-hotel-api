const express = require("express");
const customer = require("./customer.js");
const booking = require('./booking.js');
const table = require('./table.js');
const staff = require('./staff.js');
const staffMember = require('./staffRole.js');
const order = require("./order.js");
const orderMenu = require("./orderMenu.js");
const routes = express.Router();


routes.use("/customer", customer);
routes.use("/booking", booking);
routes.use("/table", table);
routes.use("/staffRole", staff);
routes.use("/staffMember", staffMember);
routes.use("/order", order);
routes.use("/orderMenu", orderMenu);



module.exports = routes