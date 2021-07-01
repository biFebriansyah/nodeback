const express = require("express")
const server = express()
const morgan = require("morgan")
const PORT = 9000
const main = require("./src/main")
const database = require("./src/configs/db")

server.use(morgan("dev"))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(main)
database
    .connect()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Connection to db`)
            console.log(`Service running on port ${PORT}`)
        })
    })
    .catch(() => {
        console.log("Gagal connection database")
    })
