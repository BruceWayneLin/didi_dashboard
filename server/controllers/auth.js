const users = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {ATS, FTS} = require('../config/token')

exports.me = (req, res, next) => { 
    if(!req.session.user) return res.status(403)
    res.json({
        user: req.session.user
    })
}

exports.token = (req, res, next) => { 
    const token = jwt.sign({user: req.session.user}, ATS, { expiresIn: '15m' }) 
    // console.log('dfjsifpsafjidsjfasjdfiosdfjoisafjioasdjfoiadsj',req.session)

    res.send({
        token: token
    })
}

exports.login = (req, res, next) => { 
    const username = req.body.username
    const password = req.body.password
    users.findOne({
        where: {
            username: username
        }
    }).then(response => {
        if(!response) {
            res.json({ error: '沒有這個會員'})
        } else {
            bcrypt.compare(
                password,
                response.password
            ).then(result => {
                const token = jwt.sign({user: response}, ATS, { expiresIn: '1m' }) 
                res.json({
                    token: `${token}`,
                })
            }).catch(err => {
                console.log('waterr', err)
            })
        }
    }).catch(err => {
        res.json({ error: err})
    })
}

exports.logout = (req, res, next) => {
    jwt.sign({user: req.session.user}, FTS, (err, token)=>{
        res.json({
            success: `成功登出`
        })
    })
}
exports.register = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    if(
        username &&
        password &&
        email
    ){
        users.findOne({
            where: {
                email: email
            }
        }).then((response)=>{
            if(response) {
                res.json({ error: '已有存在會員'})
            } else {
                users.create({
                    email: email,
                    password: bcrypt.hashSync(password, 10),
                    username: username
                }).then(result => {
                    res.json({ success: '您已註冊成功'})
                }).catch(err => {
                    res.json({ error: err })
                }) 
            }
        }).catch((err) => {
            res.json({ error: '系統發生錯誤請稍候再試'})
        })
    } else {
        res.json({ error: '請正確填寫資料'})
    }
}