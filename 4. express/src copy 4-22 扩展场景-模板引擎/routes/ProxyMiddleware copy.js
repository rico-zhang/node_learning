const http = require('http');
const context = '/proxy';
//localhost:9527/proxy/**  ==> localhost:9528/proxy/**
module.exports = (req, res, next) => {
    const path = req.path;
    if (path.startsWith(context)) {//需要代理
        const request = http.request({
            host: 'localhost',
            port: 9528,
            path,
            method: req.method,
            headers: req.headers
        }, (response) => {
            res.status(response.statusCode);
            for (const key in response.headers) {
                res.setHeader(key, response.headers[key]);
            }
            response.pipe(res);
        });
        req.pipe(request);
    } else {//不需要代理
        next();
    }
}