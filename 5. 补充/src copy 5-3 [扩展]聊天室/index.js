const express = require('express');
const http = require('http');
const path = require('path');

// express
const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve(__dirname,'public')));

// websocket
require('./chatServer')(server);

//listen port
server.listen(9527,(client)=>{
  console.log('server listen on port 9527');
})