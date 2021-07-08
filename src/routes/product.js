const express = require("express")
const routing = express.Router()
const ctrl = require("../controllers/product")
const validate = require("../middleware/validate")
const uploads = require("../middleware/upload")
const cache = require("../middleware/cache")

routing.get("/", validate(["users", "admin"]), cache, ctrl.getAll)
routing.post("/", validate("admin"), uploads.single("image"), ctrl.addData)
routing.delete("/rem/:id", validate("admin"), ctrl.removeData)

module.exports = routing
