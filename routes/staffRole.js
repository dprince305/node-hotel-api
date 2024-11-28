const express = require('express');
const { staffMemberGet, staffMemberPost } = require("../controllers/staffMember");

const staffMember = express.Router();

staffMember.get("/", staffMemberGet)
staffMember.post("/", staffMemberPost)

module.exports = staffMember