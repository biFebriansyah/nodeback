const express = require("express")
const routing = express.Router()
const ctrl = require("../controllers/categori")
const validate = require("../middleware/validate")

routing.get("/", validate("admin"), ctrl.getAll)
routing.post("/", validate("admin"), ctrl.addData)

module.exports = routing
