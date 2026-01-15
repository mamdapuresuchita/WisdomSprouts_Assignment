const express = require('express')
require('dotenv').config()
const cors = require('cors')
const path = require('path')
const {connectDB} = require('./config/db')
const userRoute = require('./routes/userRoute')
const doctorRoute = require('./routes/doctorRoute')
const appointmentRoute = require('./routes/appointmentRoute')

const app = express()
const port= process.env.PORT || 6000


app.use(express.json())
app.use(cors())
connectDB();

app.get('/',(req,res)=>res.send('Hello World!'))

app.use('/api/user',userRoute)
app.use('/api/doc',doctorRoute)
app.use('/api/appointment',appointmentRoute)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))



app.listen(port, ()=> console.log(`App running on port ${port}`))

