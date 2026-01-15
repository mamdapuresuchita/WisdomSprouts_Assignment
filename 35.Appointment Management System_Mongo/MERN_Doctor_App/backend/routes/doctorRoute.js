const express = require('express')
const {auth,admin}= require('../middleware/auth')
const doctorController = require('../controllers/doctorController')

const router = express.Router()

router.post('/apply',auth,doctorController.applyDoctor)

router.patch('/docStatus/:id', auth, admin, doctorController.docStatus);

// router.get('/getDocInfo',doctorController.get)
router.get('/getApprovedDoctorList',auth,admin,doctorController.getApprovedDoctorList)
router.get('/docApplyList',auth,admin,doctorController.docApplyList)

module.exports = router