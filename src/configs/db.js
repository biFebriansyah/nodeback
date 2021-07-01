const { Pool } = require("pg")

const pool = new Pool({
    user: "iyal",
    host: "localhost",
    database: "coffe",
    password: "abcd1234",
    port: 5432,
})

module.exports = pool
