const express = require("express")
const routing = express.Router()

routing.get("/", (req, res) => {
    res.send("Hallo from users service")
})

routing.get("/getAll", (req, res) => {
    res.send("Get all data users")
})

module.exports = routing
