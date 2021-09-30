const express = require('express')
const {projects} = require('../data.json')
const route = express.Router()


route.get('/', (req, res) => {

    res.render('index', {projects})


})

route.get('/about', (req, res) =>{
    res.render('about')

})

route.get('/projects/:id', (req, res, next) => {
    const project = projects.find(project => project.id == req.params.id )
    if (project){
        res.render("project", {project})       
    } else {
        const err = new Error()
        err.status = 404
        err.message = "There is nothing here, yet! Look out for new projects soon!"
        next(err)
    }
})

module.exports = route