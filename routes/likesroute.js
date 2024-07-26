const {Router} = require('express')
const likescontroller = require ('../controller/likescontroller')
const router = Router()

router.post('/likes', likescontroller.post_likes)
router.get('/likes', likescontroller.get_likes)

module.exports = router;