const sequelize = require('./models/db');
const Admin = require('./models/Admin');
require("./models/sync");//全部同步

// 测试连接
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })();

//Admin同步
// (async () => {
//     const res = await Admin.sync({alter:{drop:false}});
//     // const res = await Admin.drop();
//     console.log(res);
// })();

