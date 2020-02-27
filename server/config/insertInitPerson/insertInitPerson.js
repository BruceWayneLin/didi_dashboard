const user = require('../../models/users')
const bcrypt = require('bcryptjs')


function insertInitPerson() {
    user.findOne({
        where: {
            username: 'super-user'
        }
    }).then((res)=>{
        if(!res){
            user.create({
                'id': 0,
                'password': bcrypt.hashSync('super1234', 10),
                'username': 'super-user',
                'email': '',
                'level': '1',
                'active': true
            }).then(result => {
                console.log({ success: '成功初始DB管理員'})
            }).catch(err => {
                console.log({ error: err })
            }) 
        } else {
            console.log('found so not init')
        }
    })
}

module.exports = insertInitPerson