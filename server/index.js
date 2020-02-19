const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users')
const sequelize = require('./config/db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())

app.use('/users/', usersRouter)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})

if(true) {
    app.use(express.static(__dirname + '/public'))
    
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

sequelize.sync().then(result => {
    console.log(result)
}).catch(
    err =>
    console.log(err)  
)