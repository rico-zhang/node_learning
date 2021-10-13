const net = require('net');
const path = require('path');
const fs = require('fs');


const server = net.createServer();
server.on('listening', () => {
    console.log('server lintening on 9527',);
})
server.listen(9527);
server.on('connection', socket => {
    console.log("有客户端连接到服务器");
    socket.on('data', async (chunk) => {
        // console.log(chunk.toString('utf-8'));
        // writeHtml(socket);
        // writeText(socket);
       await writeImg(socket);
        socket.end();
    })
    socket.on('end', () => {
        console.log('end');
    })
    socket.on('close', () => {
        console.log('close');
    })
})

function writeHtml(socket) {
    socket.write(`HTTP/1.1 200 OK
Bdpagetype: 2

    <html>
                    <body>
                    hello1
                    </body>
                    </html>
                    `);
}

function writeText(socket) {
    socket.write(`HTTP/1.1 200 OK
Bdpagetype: 2
Content-Type:text/plain

hello just `)
}

async function writeImg(socket) {
    const headerStr = `HTTP/1.1 200 OK
Bdpagetype: 2
Content-Type:image/jpg

`
    const headerBuffer = Buffer.from(headerStr);
    const imgPath = path.resolve(__dirname, 'hsq.jpg');
    const imgBuffer = await fs.promises.readFile(imgPath);
    const buffer = Buffer.concat([headerBuffer,imgBuffer]);
    socket.write(buffer)
}