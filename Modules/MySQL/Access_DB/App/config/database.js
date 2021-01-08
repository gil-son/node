var mysql = require('mysql');


var connMySQL = function(){
    console.log("Conexão com bd estabelecida!");
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'38013051Q!1qqqqqqq',
        database:'projeto_node'
    });

}

module.exports = function(){
    return connMySQL;
}