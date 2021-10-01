/***
 * Import section
 */

const express = require('express')
const router = require('./routes/routes')
const path = require('path')
const errorHandlers = require('./routes/errorHandler')

//create the Express app
const app = express()
/**
 * Middleware section
 */
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(router)
app.use(errorHandlers)

//launch the app on port 3000
app.listen(3000, () =>{
    console.log('App started on port 3000')

})