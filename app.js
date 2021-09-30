const express = require('express')
const router = require('./routes/routes')
const path = require('path')
const errorHandlers = require('./routes/errorHandler')
const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(router)
app.use(errorHandlers)
app.listen(3000, () =>{
    console.log('App started on port 3000')

})