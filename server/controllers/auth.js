const users = require('../models/users')

exports.getUser = (req, res, next) => { 
    users.findAll().then((user)=>{
        res.send(user)
    })
}