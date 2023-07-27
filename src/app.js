const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const winston = require('winston')
const bodyParser = require('body-parser')
require('dotenv').config()

const {errorLogger} = require('./middleware/errorLogger')
const employeeRouter = require('./routes/employeeRoutes') 

const app = express()
const port = process.env.PORT

// catching all exceptions
winston.exceptions.handle(new winston.transports.File({filename: 'exceptions.log'}))
process.on('unhandledRejection', (ex)=>{
    throw ex
})

// middleware configurations
app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// routes
app.use('/api/v1', employeeRouter)

//error logger
app.use(errorLogger);

const server = app.listen(port, ()=>{
    console.log(`The jitu construction api service initiated on ${port}`);
})

module.exports = server