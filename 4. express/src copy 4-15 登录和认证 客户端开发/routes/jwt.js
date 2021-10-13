const jwt = require('jsonwebtoken');
const secret = 'rico-zhang';
const cookieKey = 'token';

exports.publish = (res, maxAge = 3600, info = {}) => {
    const token = jwt.sign(info, secret, { expiresIn: maxAge });
    res.cookie(cookieKey, token, {
        maxAge: maxAge * 1000,
        path: '/'
    });
    res.header('authorization', token);
}

exports.verify = (req) => {
    let token = req.cookies[cookieKey];
    if (!token) {
        token = req.headers.authorization;
        if (!token) {
            return null;
        }
        // authorization: bearer token
        token = token.split(" ");
        token = token.length === 1 ? token[0] : token[1];
    }
    try {
        const result = jwt.verify(token,secret)
        return result;

    } catch (error) {
        return null
    }
}