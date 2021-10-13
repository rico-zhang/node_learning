
const { pathToRegexp } = require('path-to-regexp');
const cry = require('../util/crpyt');
const needTokenApi = [
    { method: "GET", path: "/api/student" },
    { method: "PUT", path: "/api/student/:id" },
];
module.exports = (req, res, next) => {

    const needToken = needTokenApi.some(item => {
        return item.method === req.method && pathToRegexp(item.path).test(req.path)
    })
    if (needToken) {
        let token = req.cookies.token;
        // let singedToken = req.signedCookies.token;
        if (!token)
            token = req.headers.Auth;
        if (!token) {
            res.status(403).send('no token');
        } else {
            req.userId = cry.decrypt(token);
            console.log(req.userId);
            next();
        }
    } else {
        next();
    }

}