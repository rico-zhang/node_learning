const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const app = express();
app.use(require('connect-history-api-fallback')());

app.use(require('./ImgProtectedMiddleware'))

app.use(session({
    name:"sessinid",
    secret:"rico-zhang",
}));

const staticRootPath = path.resolve(__dirname, '../public');

app.use( express.static(staticRootPath));

// app.use(require('./CrosMiddleware'));
app.use(cors((req, callbck) => {
    callbck(null,{
        origin: (origin, callback) => {
            callback(null, {
                origin,
            });
        },
        credentials: true
    })
}
));

app.use(require('cookie-parser')());
// app.use(require('cookie-parser')('sdfsd'));
app.use(require('./TokenMiddleware'));

app.use(express.urlencoded({ extended: true }));

// app.use(require('./UrlEncodedMiddleware'));
app.use(express.json());

//使用代理
app.use(require('./ProxyMiddleware'));

// app.use(require('./LoggerMiddleware'));

app.get('/news', (req, res, next) => {
    throw new Error('123');
    // next(new Error('123'));
});

app.all('/api', (req, res) => {
    console.log(req.body);
    res.send('访问api');
});

app.use('/api/student', require('./api/student'));
app.use('/api/admin', require('./api/admin'));
app.use('/api/upload', require('./api/upload'));
app.use('/res', require('./api/download'));

app.use(require('./ErrorMiddleware'));

app.listen(9527, () => {
    console.log('listen on port 9527');
});