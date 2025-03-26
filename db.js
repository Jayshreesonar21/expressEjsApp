const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "database-1.c4xcqoc2wkz3.us-east-1.rds.amazonaws.com", // RDS hostname
  user: "admin", // RDS username
  password: "password", // RDS password
  database: "testdb", // Your DB name
  connectionLimit: 10,
});

module.exports = pool.promise();
