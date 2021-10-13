const mysql = require('mysql2/promise');


async function test() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123654',
        database: 'companydb',
        multipleStatements: true,
    });

    const [result, fields] = await connection.query('SELECT * FROM company where id = 1');
    console.log(result);
}
test();




