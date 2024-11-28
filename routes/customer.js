const express = require('express'); 
const { customerGet, customerPost } = require('../controllers/customer.js');

const customer = express.Router();

customer.get("/customer", customerGet)
customer.post("/customer", customerPost)


module.exports = customer