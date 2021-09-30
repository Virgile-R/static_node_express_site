const express = require('express');
const globalErrorHandler = (err, req, res, next) => {
    
    if (err.status === 404){
        res.status = 404
        res.render('not-found', {err})
    } else {
        err.message = 'There was an unexcepted error with your request, please try again later'
        res.status = 500
        if (err.status){
            res.status = err.status
        }
        res.render("error", {err})
    }
}

module.exports = globalErrorHandler