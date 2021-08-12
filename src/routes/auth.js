const express = require("express")
const routing = express.Router()
const ctrl = require("../controllers/auth")

routing.post("/", ctrl.login)
routing.post("/testlogin", ctrl.test)

module.exports = routing
