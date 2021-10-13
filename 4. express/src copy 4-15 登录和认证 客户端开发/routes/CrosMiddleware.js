module.exports = (req, res, next) => {
    console.log(req.method, req.headers);
    const allowOrigins = ['http://127.0.0.1:5500'];
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        // res.header('Access-Control-Max-Age',3600);
    }
    res.header('Access-Control-Allow-Credentials', true);
    //处理简单请求
    if ("origin" in req.headers && allowOrigins.includes(req.headers.origin)) {
        res.header("access-control-allow-origin", req.headers.origin);
    }
    next();
}