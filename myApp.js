require('dotenv').config()

let express = require('express');
let app = express();

app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req, res) => {
    res.json({
        message:
            process.env.MESSAGE_STYLE==="uppercase" ?
            "HELLO JSON" : "Hello json"
    })
})

app.use("/public", express.static(__dirname + "/public"))

module.exports = app;