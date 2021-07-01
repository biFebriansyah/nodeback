const express = require("express")
const routing = express.Router()
const ctrl = require("../controllers/product")

routing.get("/", ctrl.getAll)
routing.post("/", ctrl.addData)
routing.delete("/rem/:id", ctrl.removeData)

module.exports = routing
