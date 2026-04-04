const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "priya@1612maurya",
    database: "airbnb"
});


module.exports = pool.promise()