require('dotenv-flow').config()

module.exports = {
    ports: process.env.APP_PORTS,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbHost: process.env.DB_HOST,
    dbUrl: process.env.DB_URL
}
