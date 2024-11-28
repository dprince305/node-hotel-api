const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://dholariyaprince15:52324848@resapi.3icvv.mongodb.net/RESAPI').then((res)=>{
    console.log("Data Base Connect");

}).catch((err)=>{
    console.log(err);
})

module.exports = db;