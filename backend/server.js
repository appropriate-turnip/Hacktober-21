//import dependencies
const express = require('express')
const cors = require('cors')
require('dotenv').config();
const cookie_pareser = require("cookie-parser")
const auth = require('./Routes/Auth')


const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())
app.use(cookie_pareser())

app.use('/auth', auth)


app.listen(port, () => {
     console.log(`listening to port : ${port}`)
}) 