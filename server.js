const server = require("./app")
const { orm: database } = require("./src/configs/db")
const redis = require("./src/configs/redis")
const Logger = require("./src/helpers/logger")
const PORT = 9000

async function init() {
    try {
        await database.authenticate()
        await database.sync({ alter: true })
        await redis.check()
        server.listen(PORT, () => {
            Logger.info("Database connected")
            Logger.info("Redis connected")
            Logger.info(`Service running on port ${PORT}`)
        })
    } catch (error) {
        Logger.error(error.message)
        process.exit(1)
    }
}

init()
