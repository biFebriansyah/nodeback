const db = require('../database/sequalize/models/users')
const models = {}

models.Create = (data) => {
    return new Promise((resolve, reject) => {
        db.create(data)
            .then((res) => {
                resolve(res.toJSON())
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.GetAll = () => {
    return new Promise((resolve, reject) => {
        db.findAll({ order: [['createdAt', 'DESC']] })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.User = (username) => {
    return new Promise((resolve, reject) => {
        db.findAll({
            order: [['createdAt', 'DESC']],
            where: {
                username
            }
        })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
module.exports = models
