const sql = require('mysql2/promise');

// you can define your MySQL settings using the following environment variables
// e.g. SET SQL_DATABASE=myDatabase&&SET SQL_PASSWORD=my-secret-password&& node server.js
// don't put spaces before the "&&" or they'll be part of the env var value
// for Mac users, replace "SET" with "export"
const { SQL_HOST, SQL_PORT, SQL_USER, SQL_PASSWORD, SQL_DATABASE } = process.env;
const sqlSettings = {
    host: SQL_HOST || 'localhost',
    port: SQL_PORT || 3306,
    user: SQL_USER || 'root',
    password: SQL_PASSWORD || '',
    database: SQL_DATABASE
};

console.log('setting up connection to MySQL with the following settings:', sqlSettings);

// env var SQL_DATABASE is required!
const db = sql.createPool(sqlSettings);

module.exports = {
    db,
}
