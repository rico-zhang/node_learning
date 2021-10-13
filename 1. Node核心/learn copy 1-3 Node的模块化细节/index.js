//绝对路径
// require("C:\\Users\\Rico\\Desktop\\node_learning\\learn\\a.js");

//相对路径
// // require("./a.js")
// require("./a")
// console.log(require);

// function require(modulePath) {
//     //1. 将modulePath转化为绝对路径 absolutePath
//     //2. 判断是否已经缓存该模块
//     if (require.cache[absolutePath]) {
//         return require.cache[absolutePath].exports;
//     }
//     //3. 读取文件内容
//     //4. 将文件内容包裹到一个函数中
//     function _temp(module, exports, require, __dirname, __filename) {
//         //以下为文件内容

//         // console.log("当前模块路径：", __dirname);
//         //     console.log("当前模块文件：", __filename);
//         //     exports.c = 3;
//         //     module.exports = {
//         //       a: 1,
//         //       b: 2
//         //     };
//         //     this.m = 5;
//     }
//     //5. 创建module对象
//     module.exports = {};
//     const exports = module.exports;
//     //6. 调用临时函数 this指向为module.exports
//     _temp.call(module.exports,module,exports,require,module.path,module.filename);
//     //7.返回 module.exports
//     return module.exports;
// }
// require("./myModule");

