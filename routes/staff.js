const express = require("express");

const { staffGet, staffPost } = require("../controllers/staff.js");
const staff = express.Router();

staff.get("/", staffGet)
staff.post("/", staffPost)

module.exports = staff