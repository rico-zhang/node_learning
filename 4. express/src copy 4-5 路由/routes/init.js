const express = require('express');
const path = require('path');

const app = express();

const staticRootPath = path.resolve(__dirname,'../public');

app.use('/static',express.static(staticRootPath));

// app.use(express.urlencoded({extends:true}));

app.use(require('./UrlEncodedMiddleware'));
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

app.use(require('./ErrorMiddleware'));

app.listen(9527, () => {
    console.log('listen on port 9527');
});