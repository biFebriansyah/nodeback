const db = require("../configs/db")
const products = {}

products.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.product ORDER BY id DESC")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.addData = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO product (name, price) VALUES ($1, $2)", [data.name, data.price])
            .then((res) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.rmData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.product WHERE id = ${id}`)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = products
