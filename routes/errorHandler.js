//Error handlers
const generic404Error = (req, res, next)  => {
    const err = new Error('It appears you are lost. Maybe go back and visit my projects!')
    err.status = 404
    next(err)

}

const globalErrorHandler = (err, req, res, next) => {
    
    if (err.status === 404){
        res.status = 404
        console.error('Error 404: Page not found.')
        res.render('page-not-found', {err})
    } else {
        err.message = 'There was an unexcepted error with your request, please try again later'
        console.error('Error 500: internal error with the server.')
        res.status = 500
        if (err.status){
            res.status = err.status
        }
        res.render("error", {err})
    }
}

module.exports = {generic404Error, globalErrorHandler}