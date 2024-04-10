const mysql = require('mysql2');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'restaurant'
}

const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

module.exports = pool;
