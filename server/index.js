const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
const insertInitUser = require('../server/config/insertInitPerson/insertInitPerson')
require('dotenv').config()
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const didiRouter = require('./routes/didi')

const DB = require('./config/db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())

app.use('/users/', usersRouter)
app.use('/didi/', didiRouter)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})

if(true) {
    app.use(express.static(__dirname + '/public'))
    
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}


let retries = 5 
while (retries) {
    try {
        DB.sequelize.sync().then(result => {
            insertInitUser()
            console.log(result)
        }).catch(
            err =>
            console.log(err)  
        )
        DB.didiDB.sync().then(result => {
            console.log(result)
        }).catch(
            err =>
            console.log(err)  
        )
        break;
    } catch(e) {
        retries -= 1
        console.log(retries)
        new Promise(res => setTimeout(res, 10000))
    }
}

// setTimeout(()=>{
//     sequelize.sync().then(result => {
//         console.log(result)
//     }).catch(
//         err =>
//         console.log(err)  
//     )
// }, 13000)
