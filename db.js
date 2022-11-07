const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'node_db',
    multipleStatements: true,
  });

  
  module.exports = db;