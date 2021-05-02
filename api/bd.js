const mysql = require('mysql');
const {database} = require('./keys');
const {promisify} = require("es6-promisify");

const pool = mysql.createPool(database);



pool.getConnection((err,connection) =>{
    if(connection){
        connection.release();
        console.log('conectado');
        return;
    }

})

pool.query = promisify(pool.query);

module.exports = pool;
