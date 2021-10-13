
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
        //使用cookie 需要先调用 api/admin/login
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
        //使用session 需要先调用 api/admin/login1
      /*   console.log(req.seession);
        if(!req.session.loginUser){
            res.status(403).send('no session');
        }
        else{
            console.log(req.session.loginUser);
            next();
        } */
    } else {
        next();
    }

}