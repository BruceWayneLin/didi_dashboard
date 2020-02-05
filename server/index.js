const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRouter = require('./routes/users')
const sequelize = require('./config/db')

const app = express()
app.use(bodyParser.json())
app.use(cors())
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
}).catch(err =>
    console.log(err)  
)