const {Router} = require('express')
const commentcontroller = require('../controller/commentcontroller')
const router = Router()

router.post('/comment', commentcontroller.post_comment)
router.get('/comment', commentcontroller.get_comment)
// router.get('/users:id', commentcontroller.post_user)
// router.update('/users:id', commentcontroller.get_user)
// router.delete('/users:id', commentcontroller.get_user)

module.exports = router;