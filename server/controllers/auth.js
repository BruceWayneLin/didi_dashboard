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
                if(!result) return res.send({ error: '錯誤的密碼和使用者名稱'})
                if(response) {
                    response.token = ''
                    const token = jwt.sign({user: response}, ATS, {expiresIn:'24h'})
                    response.token = token.toString()
                    response.save().then(()=>{
                        res.json({
                            token: `Bearer ${token.toString()}`,
                        })
                    })
                } else {
                    res.status(403).send({ error: '錯誤的密碼和使用者名稱'})
                }
            }).catch(err => {
                res.json({ error: '沒有這個會員'})
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

exports.users = (req, res, next) => {
    users.findAll({
        attributes: ['id', 'username', 'email', 'level'],
        limit: 14
    }).then((user)=>{
        res.send({
            'users': user
        })
    }).catch((err)=>{
        res.json({error: err})
    })
}

exports.deleteUser = (req, res, next) => {
    users.destroy({
        where: {
            id: req.body.item.id
        }
    }).then((result)=>{
        res.send({
            success: '您已成功刪除'
        })
    }).catch((err)=>{
        res.json({error: err})
    })
}

exports.updateUser = (req, res, next) => {
    users.findOne({
        where: {
            id: req.body.id
        }
    }).then((user) => {
        if(req.body.password){
            user.password = bcrypt.hashSync(req.body.password, 10)
        }
        if(req.body.level){
            user.level = req.body.level
        }
        user.save()
        res.send({
            success: '您已成功更新'
        })
    }).catch((err) => {
        res.send({err: err})
    })
    

    // users.update({
    //     where: {
    //         id: req.body.item.id
    //     }
    // }).then((result)=>{
    //     res.send({
    //         success: '您已成功刪除'
    //     })
    // }).catch((err)=>{
    //     res.json({error: err})
    // })
}