const { Pool } = require('pg')
const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'dev'
const config = require('./sequalize')[env]

let sequelize
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const pool = new Pool({
    user: process.env.DB_USERS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432
})

module.exports = sequelize
