const express = require("express")
const routing = express.Router()
const ctrl = require("../controllers/product")
const uploads = require("../middleware/upload")
const validate = require("../middleware/validate")

routing.get("/", ctrl.getAll)
routing.post("/", uploads.single("image"), ctrl.addData)

module.exports = routing
