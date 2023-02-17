require('newrelic')
const dotenv = require('dotenv')
const Logger = require('./src/helpers/logger')
const PORT = 8080

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: __dirname + '/.env.development' })
}
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: __dirname + '/.env.production' })
}

const database = require('./src/configs/db')
const redis = require('./src/configs/redis')
const server = require('./app')

;(async () => {
    try {
        await database.authenticate()
        await redis.check()
        server.listen(PORT, () => {
            Logger.info('Database connected')
            Logger.info('Redis connected')
            Logger.info(`Service running on port ${PORT}`)
        })
    } catch (error) {
        Logger.error(error)
    }
})()
