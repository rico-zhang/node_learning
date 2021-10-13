const multer = require("multer");

module.exports = (err, req, res, next) => {
    console.log('errmiddleware');
    if (err) {
        if (err instanceof multer.MulterError) {
            let errObj = {
                code: 500,
                msg: err.message
            }
            res.status(200).send(errObj);
            return 
        }
       const errObj = {
            code: 500,
            msg: err instanceof Error ? err.message : err
        }
        console.log(errObj.msg);
        res.status(500).send(errObj);
    } else {
        next();
    }
}