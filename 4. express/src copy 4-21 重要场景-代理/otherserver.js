const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.headers.host);
    console.log(req.headers.origin);
    console.log(req.headers.referer);
    res.end('ok');
});

server.listen(9528,()=>{
    console.log('listen on port 9528');
})
