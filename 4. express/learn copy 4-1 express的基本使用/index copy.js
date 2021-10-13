const http = require('http');
const express = require('express');

// http
/* 
const server = http.createServer((req,res)=>{
    res.end('hello http');
});

server.listen(9528,()=>{
    console.log("listen on prot 9528");
}); */

//http + express
/* const app  = express();
app.all('*',(req,res)=>{
    res.send('hello http+express');
})
const server = http.createServer(app);
server.listen(9528,()=>{
    console.log("listen on port 9528");
}) */

// express
/* const app  = express();
app.all('*',(req,res)=>{
    res.send('hello express');
})
app.listen(9528,()=>{
    console.log('listen on port 9528');
}) */