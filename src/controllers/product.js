const products = {}
const model = require("../models/products")
const respone = require("../helpers/respone")
const uploads = require("../helpers/uploadCloud")
const { redisDb } = require("../configs/redis")

products.getAll = async (_, res) => {
    try {
        console.log("data dari postgres")
        const result = await model.getAll()
        const data = JSON.stringify(result)
        redisDb.setex("product", 20, data)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.addData = async (req, res) => {
    try {
        let urlImage = ""
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        }

        const data = {
            name: req.body.name,
            price: req.body.price,
            image: urlImage || req.file.path,
        }

        const result = await model.addData(data)
        redisDb.del("product")
        return respone(res, 200, result)
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
