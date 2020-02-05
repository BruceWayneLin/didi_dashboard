const Sequelize = require('sequelize')
const sequelize = new Sequelize('dashboard', 'root', 'aniki0720', {
  dialect: 'mysql',
  host: 'database-1.chbscvt4ogov.us-east-1.rds.amazonaws.com'
})

module.exports = sequelize