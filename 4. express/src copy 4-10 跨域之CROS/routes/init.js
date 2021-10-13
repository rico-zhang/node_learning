const express = require('express');
const path = require('path');

const app = express();

const staticRootPath = path.resolve(__dirname,'../public');

app.use('/static',express.static(staticRootPath));

app.use(require('./CrosMiddleware'));

app.use(require('cookie-parser')());
// app.use(require('cookie-parser')('sdfsd'));
app.use(require('./TokenMiddleware'));

app.use(express.urlencoded({extended:true}));

// app.use(require('./UrlEncodedMiddleware'));
app.use(express.json());

app.get('/news', (req, res, next) => {
    throw new Error('123');
    // next(new Error('123'));
});

app.all('/api',(req,res)=>{
    console.log(req.body);
   res.send('访问api');
});

app.use('/api/student',require('./api/student'));
app.use('/api/admin',require('./api/admin'));

app.use(require('./ErrorMiddleware'));

app.listen(9527, () => {
    console.log('listen on port 9527');
});