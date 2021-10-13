const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123654',
    database: 'companydb',
    multipleStatements: true,
});
//可以使用pool.query pool.execute 

//也可以这样使用
pool.getConnection((err,connection)=>{
    connection.query();
    connection.execute();
    pool.releaseConnection(connection);
})


