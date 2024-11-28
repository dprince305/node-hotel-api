const express = require("express");
const { tableGet, tablePost } = require("../controllers/table");

const table = express.Router();

table.get('/', tableGet)
table.post('/', tablePost)

module.exports = table