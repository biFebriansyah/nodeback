const users = {}
const model = require('../models/users')
const passwordHash = require('../helpers/hash')
const respone = require('../helpers/respone')
const Logger = require('../helpers/logger')

users.getAll = async (_, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        Logger.error(error)
        return respone(res, 500, error)
    }
}

users.getOne = async (req, res) => {
    try {
        const result = await model.User(req.params.user)
        return respone(res, 200, result)
    } catch (error) {
        Logger.error(error)
        return respone(res, 500, error)
    }
}

users.addData = async (req, res) => {
    try {
        const check = await model.User(req.body.username)

        if (check.length > 0) {
            return respone(res, 400, { msg: 'username sudah terpakai' }, true)
        }

        const passHash = await passwordHash(req.body.password)
        console.log(passHash)
        const data = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: passHash
        }
        const result = await model.Create(data)
        return respone(res, 200, result)
    } catch (error) {
        Logger.error(error)
        return respone(res, 500, error, true)
    }
}

module.exports = users
