const express = require('express')
const router  = express.Router()
const didi = require('../controllers/didi')
const verifyToken = require('../middleware/auth')

router.post('/member', verifyToken, didi.member)


module.exports = router