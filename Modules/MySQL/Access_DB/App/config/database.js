var mysql = require('mysql');


var connMySQL = function(){
    console.log("Conexão com bd estabelecida!");
    return mysql.createConnection({ 
        host:'localhost',
        user:'root',
        password:'',
        database:'teste'
    });

}

module.exports = function(){
    return connMySQL;
}