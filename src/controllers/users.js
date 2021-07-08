const users = {}
const model = require("../models/users")
const passwordHash = require("../helpers/hash")
const respone = require("../helpers/respone")

users.getAll = async (_, res) => {
    try {
        const result = await model.getAll()
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

users.addData = async (req, res) => {
    try {
        const check = await model.getbyUsername(req.body.username)

        if (check.length > 0) {
            return respone(res, 200, { msg: "username sudah terpakai" })
        }

        const passHash = await passwordHash(req.body.password)
        const data = {
            name: req.body.name,
            username: req.body.username,
            password: passHash,
        }
        const result = await model.addData(data)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error, true)
    }
}

module.exports = users
