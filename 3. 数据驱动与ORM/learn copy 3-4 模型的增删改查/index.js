const sequelize = require('./models/db');
const Admin = require('./models/Admin');
// require("./models/sync");//全部同步 //已经同步过了 无需再同步

//方式1
// const admin = Admin.build({
//     loginId: '123456',
//     loginPwd: '7777'
// });

// admin.loginPwd = '8888';
// admin.save().then(res => {
//     console.log(res);
// });

//方式2
// Admin.create({
//     loginId: '456789',
//     loginPwd: '4578'
// }).then(res => {
//     console.log(res);
// })
