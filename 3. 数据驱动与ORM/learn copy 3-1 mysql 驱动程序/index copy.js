const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123654',
    database: 'companydb'
});

//select with simple
// connection.query('SELECT * FROM company where id = 1', (err, result, fields) => {
//     console.log(result);
// });

//select with placeholder
// connection.query('SELECT * FROM company where id = ?',[1], (err, result, fields) => {
//     console.log(result);
// });

//insert
// connection.query('insert into company (name,location,buildDate) values ("El","郑州","2021-10-01")',(err, result, fields) => {
//     console.log(result);
// });

//update
// connection.query('update company set location = "上海" where id = 4',(err, result, fields) => {
//     console.log(result);
// });

//delete
// connection.query('delete fromcompany  where id = 4',(err, result, fields) => {
//     console.log(result);
// });

