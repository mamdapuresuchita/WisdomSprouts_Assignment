const express = require('express')
const userController = require('../controllers/userController')
const  {auth, admin} = require('../middleware/auth')
const upload = require('../middleware/multer')
const router = express.Router()

router.post('/register',upload.single('userImage'),userController.register)
router.post('/login',userController.login)
router.get('/getUserInfo',auth,userController.getUserInfo)
router.get('/doctorList',auth,userController.doctorList)
router.get('/usersList',auth,admin,userController.getAllUsers)


module.exports = router