/*
Node, incompatibilidade com a versão 8.0 do MySQL

https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

https://stackoverflow.com/questions/31221980/how-to-access-a-rowdatapacket-object
*/

var mysql = require('mysql');

var connMySQL = function(){
    console.log("Conexão com bd estabelecida!");
    return connection = mysql.createConnection({
        host:'localhost',
        user:'User01',
        password:'',
        database:'projeto_node'
        //, insecureAuth : true
    });
}

module.exports = function(){
    return connMySQL;
}