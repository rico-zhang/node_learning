const path = require('path');
module.exports = (req, res, next) => {
    console.log(req.path);
    let host = req.headers.host;
    let referer = req.headers.referer;
    const extname = path.extname(req.path);
    if (![".jpg", ".jpeg", ".png", ".gif"].includes(extname)) {
        next();
        return;
    }
    if (referer) {
        referer = new URL(referer).host;
    }
    console.log(referer,host);
    if (referer && host !== referer) {
        req.url = '/logo.png';
        // res.sendStatus(404);
        // return;
    }
    next();
}