const express = require('express');
const con = require('./mongodb-connector');

const app = express()
app.use(express.json())

con.on('open', function () {
    console.log("mongoDb database connected")
})

const studentRoutes = require('./routes/student')

app.use('/', studentRoutes)

app.listen(9000, function () {
    console.log("server running on port:9000")
})
