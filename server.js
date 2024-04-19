require('dotenv').config() // Lagi tandaan, para maka connect gamit yung mga hidden na mga data galing sa .env mo 
const connectDB = require('./connectMongo')
const cors = require('cors')

cors()
connectDB() 

const bodyParser = require('body-parser')


const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/api', require('./routes/apiRoutes'))//api routes


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening to port ${PORT}`))
