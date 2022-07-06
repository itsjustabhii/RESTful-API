const express = require('express')      //Importing the package
const app = express()           //Executing it
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Import Routes
const postsRoute = require('./routes/posts')
const userRoute = require('./routes/user.js')

//Middlewares
app.use('/posts', postsRoute)
app.use('/user', userRoute)
app.use(cors())

//This enables POSTMAN to send JSON data
app.use(bodyParser.json())


//Routes
app.get('/', (req, res) => {        //It sends us back the message.
    res.send('We are on home')
})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("Connected to MongoDB!")
})

//How do we start listening to the server?
app.listen(3000)
