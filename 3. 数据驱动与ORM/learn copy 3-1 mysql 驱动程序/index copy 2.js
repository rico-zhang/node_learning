const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123654',
    database: 'companydb',
    multipleStatements: true,
});


function test1(id) {
    connection.query(`SELECT * FROM company where id =${id}`, (err, result, fields) => {
        console.log(result);
    });
}

// test1(1);
// test1('0;insert into company (name,location,buildDate) values ("El","郑州","2021-10-01")');//sql 注入有效

function test2(id) {
    connection.query(`SELECT * FROM company where id =?`,[id], (err, result, fields) => {
        console.log(result);
    });
}
// test2(1);
// test2('0;insert into company (name,location,buildDate) values ("El","郑州","2021-10-01")');//sql 注入无效

function test3(id) {
    connection.execute(`SELECT * FROM company where id =${id}`, (err, result, fields) => {
        console.log(result);
    });
}
// test3(1);
// test3('0;insert into company (name,location,buildDate) values ("El","郑州","2021-10-01")');//sql 注入无效

function test4(id) {
    connection.execute(`SELECT * FROM company where id = ?`,[id], (err, result, fields) => {
        console.log(result);
    });
}
// test4(1);
// test4('0;insert into company (name,location,buildDate) values ("El","郑州","2021-10-01")');//sql 注入无效
