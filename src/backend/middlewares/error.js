const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    console.log(error);

    error.message = err.message;


    res.status(error.statusCode || 500).json({
        success: false,
        error: (error.message).replace(/[^a-zA-Z ]/g, " ") || 'Server Error'
    });
}

module.exports = errorHandler;

