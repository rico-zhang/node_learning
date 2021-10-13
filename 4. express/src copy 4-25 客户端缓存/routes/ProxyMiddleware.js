const http = require('http');
const {createProxyMiddleware}  = require('http-proxy-middleware');
const context = '/proxy';
//localhost:9527/proxy/**  ==> localhost:9528/proxy/**
module.exports = createProxyMiddleware(context,{
    target:"http://localhost:9528",
    changeOrigin:true,
});


//请启动 otherserver.js target服务器