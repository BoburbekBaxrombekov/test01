const express = require('express')
const app = express()
const configDb = require("./data/db")
configDb()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(express.static('public'))
app.use('/api',require('./routes/authRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.use('/v1',require('./routes/fileRoutes'))





//agar hato back da bolganida konsolga hato chiqar edi


app.listen(3001, console.log('server is running on port 3001'))