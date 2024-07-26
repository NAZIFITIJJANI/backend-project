const {Router} = require('express')
const postcontroller = require('../controller/postcontroller')
const router = Router()

router.get('/post', postcontroller.get_post)
router.post('/post', postcontroller.post_post)

module.exports = router;