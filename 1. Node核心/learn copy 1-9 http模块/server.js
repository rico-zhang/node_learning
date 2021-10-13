const http = require('http');
const url = require('url');

function handleReq(req) {
    console.log(req.method);
    // console.log(url.parse(req.url));
    // console.log(req.headers);

    let body = '';
    req.on('data', (chunk) => {
        body += chunk.tosString('utf-8');
    });
    req.on('end', () => {
        console.log(body);
    })
}

const server = http.createServer((req, res) => {
    handleReq(req);
    // res.statusCode = 404;
    res.setHeader('a',1);
    res.setHeader('b',2);
    res.write('你好')
    res.end('ok');
});

server.listen(9527);
server.on('listening', () => {
    console.log('server listening on 9527');
})