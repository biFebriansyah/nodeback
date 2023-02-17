// import db from '@db/models/products'
const db = require('../database/sequalize/models/products')
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

models.GetByID = (id) => {
    return new Promise((resolve, reject) => {
        db.findByPk(id)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = models
