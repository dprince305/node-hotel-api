const express = require( "express");
const routes = require("./routes/index.js");
const bodyParser = require( 'body-parser');
const database = require("./config/db.js");

const app = express();
const PORT = 3002


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})