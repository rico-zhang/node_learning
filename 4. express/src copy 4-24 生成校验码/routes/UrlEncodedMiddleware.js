const qs = require('querystring');

module.exports = (req, res, next) => {
    if (req.get('Content-Type') === 'application/x-www-form-urlencoded') {
        let result = '';
        req.on('data', (chunk) => {
            result += chunk.toString('utf-8');
        });
        req.on('end', () => {
            const json = qs.parse(result);
            req.body = json;
            next();
        })
    } else {
        next()
    }
}