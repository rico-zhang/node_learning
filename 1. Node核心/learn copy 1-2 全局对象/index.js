console.log(global);

let timer = setTimeout(() => {
    console.log("timeout");
}, 1000);
clearTimeout(timer);

timer = setImmediate(() => {
    console.log("immediate");
})
clearImmediate(timer);

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

console.log(process.argv);
console.log(process.platform);
console.log(process.env);

const buff = Buffer.from('abc','utf-8');
console.log(buff);