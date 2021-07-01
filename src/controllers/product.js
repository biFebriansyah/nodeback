const products = {}
const model = require("../models/products")
const respone = require("../helpers/respone")

products.getAll = async (_, res) => {
    try {
        const result = await model.getAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.addData = async (req, res) => {
    try {
        const respone = await model.addData(req.body)
        res.send(respone)
    } catch (error) {
        res.send(error)
    }
}

products.removeData = async (req, res) => {
    try {
        const respone = await model.rmData(req.params.id)
        res.send(respone)
    } catch (error) {
        res.send(error)
    }
}

module.exports = products
