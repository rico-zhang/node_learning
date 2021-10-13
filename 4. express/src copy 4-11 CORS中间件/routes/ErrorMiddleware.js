module.exports = (err, req, res, next) => {
    console.log('errmiddleware');
    if (err) {
        const errObj = {
            code: 500,
            msg: err instanceof Error ? err.message : err
        }
        res.status(500).send(errObj);
    } else {
        next();
    }
}