const express = require('express')
const morgon = require('morgan')
const colors = require('colors')
const cors = require('cors')
const connetDB = require('./config/conntingDB')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 6000

connetDB()
app.use(cors())
// app.use(morgon('dev'))
app.use(express.json())

app.use('/', require('./routes/userRoutes'))
app.use('/', require('./routes/transectionRouter'))


app.listen(port, () => {
    console.log(`conting port ${port}`);
})