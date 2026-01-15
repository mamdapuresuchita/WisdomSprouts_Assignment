const express = require('express')
const appointmentController = require('../controllers/appointmentController')
const {auth,doctor, admin} = require('../middleware/auth')

const router = express.Router()

router.post('/createAppointment',auth,appointmentController.createAppointment)
router.patch('/statusUpdateByDoctor/:ID',auth,doctor,appointmentController.statusUpdateByDoctor)
router.put('/updateAppointment/:ID',auth,appointmentController.updateAppointment)
router.delete('/deleteAppointment/:ID',auth,appointmentController.deleteAppointment)
router.get('/getAppointmentByUser',auth,appointmentController.getAppointmentsByUser)
router.get('/showAppointmentsOfDoctor',auth,doctor,appointmentController.showAppointmentsOfDoctor)
router.get('/getAllAppointments',auth,admin,appointmentController.viewAllAppointments)

module.exports = router