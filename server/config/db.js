const Sequelize = require('sequelize')
const sequelize = new Sequelize('dashboard', 'root', '1234', {
  dialect: 'mysql',
  host: '172.20.0.1',
  port: 3307,
  socketPath: '/var/run/mysqld/mysqld.sock',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
//   host: 'database-1.chbscvt4ogov.us-east-1.rds.amazonaws.com'
})

module.exports = sequelize