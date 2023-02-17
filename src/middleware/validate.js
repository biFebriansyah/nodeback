const respone = require('../helpers/respone')
const jwt = require('jsonwebtoken')

const checkToken = (role) => {
    return (req, res, next) => {
        const { Authorization } = req.headers

        if (process.env.NODE_ENV === 'test') {
            next()
            return
        }

        if (!Authorization) {
            return respone(res, 401, { msg: 'Login dlu' })
        }

        const bearerToken = Authorization.split(' ')[1]

        jwt.verify(bearerToken, process.env.JWT_KEYS, (err, decode) => {
            if (err) {
                return respone(res, 401, err)
            }

            if (decode.role === role) {
                next()
            } else {
                return respone(res, 401, { msg: 'akess tidak dizinkan' })
            }
        })
    }
}

module.exports = checkToken
