const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : 'localhost', 
    user : 'root' ,
    password : 'Kunal@1999' ,
    database : 'BLOG' ,
    insecureAuth : true  
})

mysqlConnection.connect( (err) => {
    if(!err) console.log('Connection Established!');
    else console.log('Connection Failed');
})
module.exports = mysqlConnection;