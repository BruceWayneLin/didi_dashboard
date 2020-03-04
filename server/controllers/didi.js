

const DB = require('../config/db')

exports.member = (req, res, next) => {
    DB.didiDB.query("SELECT id as ID ,account as member_account ,name as nickname, null as real_name, referrer_id as recommend_account ,create_at as create_date, status as status, '' as inspect FROM `new-cat`.members;").then((items)=>{
        console.log(items)
        let returnArra = []
        items.forEach(element => {
            element.forEach(el => {
                returnArra.push(el)
            })
        });
        res.send(returnArra)
    }).catch((e)=>{
        console.log(e)
    })
}