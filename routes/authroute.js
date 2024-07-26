const {Router} = require('express')
const authcontroller = require('../controller/authcontroller')
const router = Router()

router.post('/signup', authcontroller.signup_user)
router.post('/login', authcontroller.login_user)



router.get('/signUp', authcontroller.signup)
router.get('/login', authcontroller.login)


module.exports = router;