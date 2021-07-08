const express = require("express")
const routing = express.Router()
const ctrl = require("../controllers/users")
const validate = require("../middleware/validate")

routing.get("/", validate("admin"), ctrl.getAll)
routing.post("/", ctrl.addData)

module.exports = routing
