const { dbHost, dbName, dbPass, dbUser, dbUrl } = require('./env')

module.exports = {
    development: {
        use_env_variable: dbUrl,
        username: dbUser,
        password: dbPass,
        database: dbName,
        host: dbHost,
        dialect: 'postgres'
    },
    test: {
        use_env_variable: dbUrl,
        username: dbUser,
        password: dbPass,
        database: dbName,
        host: dbHost,
        dialect: 'postgres'
    },
    production: {
        use_env_variable: dbUrl,
        username: dbUser,
        password: dbPass,
        database: dbName,
        host: dbHost,
        dialect: 'postgres'
    }
}
