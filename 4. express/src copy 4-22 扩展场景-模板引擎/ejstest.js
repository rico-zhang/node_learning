const ejs = require('ejs');
const path = require('path');

const str = '生成的数字是：<%= number %>;'
const result = ejs.render(str, {
    number: Math.random()
});
console.log(result);

// ejs.renderFile(path.resolve(__dirname,"./test.ejs") , {
//     number: Math.random()
// }).then(result => {
//     console.log(result);
// })


// ejs.renderFile("./test.ejs" , {
//     number: Math.random()
// }).then(result => {
//     console.log(result);
// })

ejs.renderFile("./test.ejs" , {
    number: Math.random()
},{
    views:[path.resolve(__dirname)]
}).then(result => {
    console.log(result);
})