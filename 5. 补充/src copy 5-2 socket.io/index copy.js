// const http = require('http');
// const server = http.createServer();
// const io = require('socket.io')(server, {
//     allowEIO3: true,
//     cors: {
//         origin: "http://localhost:5500",
//         methods: ["GET", "POST"],
//         credentials: true
//     }
// });
// io.on('connection', client => {
//     console.log('新的客户端连接进来了');
//     client.on('msg', data => { console.log(data); });
//     client.on('disconnect', data => { console.log('disconenct'); });
// })
// server.listen(9527, () => {
//     console.log('listen on 9527');
// })

const io = require('socket.io')({
    allowEIO3: true,
    cors: {
        origin: "http://localhost:5500",
        methods: ["GET", "POST"],
        credentials: true
    }
});
io.on('connection',client=>{
    console.log('新的客户端连接进来了');
        client.on('msg', data => { console.log(data); });
        client.on('disconnect', data => { console.log('disconenct'); });
});
io.listen(9527);