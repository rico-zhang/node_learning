const net = require('net');

const socket = net.createConnection({
    host: 'nodejs.cn',
    port: 80
}, () => {
    console.log("连接成功");
});

let reciver;
function parseResponse(res) {
    const [header, ...bodys] = res.split(`\r\n\r\n`);
    const [first, ...other] = header.split('\r\n');
    const map = new Map(other.map(it => it.split(':')));
    map.set('first', first);
    map.set('body', bodys.join('').trimStart());
    return map;
}
function isOver() {
    const contentLength = +reciver.get('Content-Length');
    const currLenght = Buffer.from(reciver.get('body'), 'utf-8').byteLength;
    console.log(contentLength, currLenght);
    return currLenght >= contentLength;
}


socket.on('data', (chunk) => {
    const res = chunk.toString('utf-8');
    if (!reciver) {
        reciver = parseResponse(res);
    } else {
        reciver.set('body', reciver.get('body') + res)
    }
    if (isOver()) {
        socket.end()
    }
})

socket.write(`GET / HTTP/1.1
Host: nodejs.cn

`);

socket.on('close', () => {
    console.log('关闭了');
    console.log(reciver.get('body'));
})