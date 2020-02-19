
const jwt = require('jsonwebtoken')
const {ATS, FTS} = require('../config/token')
const users = require('../models/users')

const verifyToken = (req, res, next) => {
    const bearToken = req.headers['authorization']
    const token = bearToken && bearToken.split(' ')[1]
    if(token) {
        jwt.verify(token, ATS, (err, authData) => {
            if(err) {
                res.status(403).send({
                    'error': '您已登出'
                })
            }
            
            if(authData.user) {
                users.findOne({where: {
                    username: authData.user.username
                }}).then((user)=>{
                    console.log(user)
                    if(token === user.token) {
                        req.session.user = authData.user
                        next()
                    } else {
                        res.status(403).send({
                            'error': '您已登出'
                        })
                    }
                })
            } else {
                res.status(403).send({
                    'error': '出錯'
                })
            }
        })
    } else {
        res.status(403).send({
            'error': '您已登出'
        })
    }
}

module.exports = verifyToken