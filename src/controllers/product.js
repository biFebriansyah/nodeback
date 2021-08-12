const products = {}
const model = require("../models/products")
const respone = require("../helpers/respone")
const uploads = require("../helpers/uploadCloud")

products.getAll = async (_, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error, true)
    }
}

products.addData = async (req, res) => {
    try {
        let urlImage = ""
        if (req.file !== undefined) {
            urlImage = await uploads(req.file.path)
        }

        const data = {
            name_product: req.body.name,
            price_product: req.body.price,
            image_product: urlImage || req.file.path,
            id_categori: req.body.categori,
        }

        const result = await model.Save(data)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error, true)
    }
}

module.exports = products
