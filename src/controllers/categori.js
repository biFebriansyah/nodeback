const categori = {}
const model = require("../models/categori")
const respone = require("../helpers/respone")

categori.getAll = async (_, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error, true)
    }
}

categori.addData = async (req, res) => {
    try {
        const data = {
            name_categori: req.body.name,
        }

        const result = await model.Save(data)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error, true)
    }
}

module.exports = categori
