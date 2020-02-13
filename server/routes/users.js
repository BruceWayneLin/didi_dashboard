const express = require('express')
const router  = express.Router()
const auth = require('../controllers/auth')
const verifyToken = require('../middleware/auth')

router.post('/login', auth.login)
router.post('/register', auth.register)
router.get('/me', verifyToken, auth.me)
router.post('/logout', verifyToken, auth.logout)
router.post('/token', auth.token)


module.exports = router