const db = require("../configs/db")
const users = {}

users.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.users ORDER BY id DESC")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

users.addData = (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.users ("name", username, "password") VALUES($1, $2, $3)`, [
            data.name,
            data.username,
            data.password,
        ])
            .then((res) => {
                resolve(data)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

users.getbyUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.users WHERE username='${username}'`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = users
