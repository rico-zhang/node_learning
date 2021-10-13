const http = require('http');


const request = http.request('http://nodejs.cn/', {
    method: 'GET'
}, (res) => {
    console.log(res.statusCode, res.statusMessage);
    console.log(res.headers);
    let result = '';
    res.on('data', (chunk) => {
        result += chunk.toString('utf-8');
    });
    res.on('end', () => {
        console.log(result);
    })
})

request.end();//表示消息体结束