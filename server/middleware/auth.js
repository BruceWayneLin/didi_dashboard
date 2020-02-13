
const jwt = require('jsonwebtoken')
const {ATS, FTS} = require('../config/token')
const verifyToken = (req, res, next) => {
    const bearToken = req.headers['authorization']
    if(bearToken) {
        jwt.verify(bearToken, ATS, (err, authData) => {
            if(err) {
                res.status(403).send({
                    'error': '您已登出'
                })
            }
            req.session.user = authData
            next()
        })
    } else {
        res.status(403).send({
            'error': '您已登出'
        })
    }
}

module.exports = verifyToken