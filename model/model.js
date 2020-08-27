const connection = require('../connection');
const { Router } = require('express');

var user = function(user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}

user.insert = (new_user ,  result) => {
    connection.query("INSERT INTO NUSER SET ?" , new_user , (err , res) => {
        if(err) result(err , null);
        else result(null , res.insertId);
    });
}
user.login = (cur_user , result) => {
    var {username , password} = cur_user;
    connection.query("SELECT * FROM NUSER WHERE USERNAME =  ?" , username , (err , res) => {
        if(err) result(err, null);
        else {
            result(null , res.resultId);
        }
    });
}
module.exports = user;