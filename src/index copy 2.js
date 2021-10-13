const { Worker } = require('worker_threads');
const path = require('path');
const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
    workerData: [1,2]
});//worker是子线程的实例

worker.on('exit', () => {
    console.log('子线程退出了');
})
worker.on('message',msg=>{
    console.log(msg);
})