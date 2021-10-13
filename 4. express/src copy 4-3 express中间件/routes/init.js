const express = require('express');


const app = express();

app.use('/static',require('./StaticMiddleware'))

app.get('/news', (req, res, next) => {
    throw new Error('123');
    // next(new Error('123'));
});

app.use(require('./ErrorMiddleware'));

app.get('/api',(req,res)=>{
   res.send('访问api');
})

app.listen(9527, () => {
    console.log('listen on port 9527');
});