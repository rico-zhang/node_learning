const { utimes } = require('fs');
const os = require('os');
const path = require('path');

const url = require('url');
const util = require('util');

// console.log(os.EOL);
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.tmpdir());

// console.log(path.basename("shd/skuye/kjhf.dfg/a.html"));//a.html
// console.log(path.basename("shd/skuye/kjhf.dfg/a.html",".html"));//a
// console.log(path.basename("shd/skuye/kjhf.dfg/a.html","ml"));//a.ht

// console.log(path.sep);
// console.log(path.delimiter);
// console.log(path.dirname("shd/skuye/kjhf.dfg/a.html"));
// console.log(path.extname("shd/skuye/kjhf.dfg/a.html"));
// console.log(path.join('a','b','..','d.js'));

// console.log(new url.URL('https://nodejs.org:20/dist/latest-v12.x/docs/api/path.html#path_path_join_paths'));

//promise ==> callback
/* function delay(dura = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dura);
        }, dura);
    })
}
function thenFunc(data) {
    console.log(data);
}
delay(500).then(thenFunc);

const delayCallBack=util.callbackify(delay);
delayCallBack(500, (err, data) => { thenFunc(data) }); */

//callback ==> promise
function delay(dura = 1000, callback) {
    setTimeout(() => {
        callback(null, dura);
    }, dura);
}

function callback(err, data) {
    console.log(data);
}

delay(600, callback);
const delayPromise = util.promisify(delay);
delayPromise(600).then((data) => { callback(null, data) });
