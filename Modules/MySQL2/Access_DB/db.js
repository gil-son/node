
// Enquanto a página carrega, essa função faz a conexão de forma simultânea
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected') //Se a variável global for verdadeira e a conexão global for diferente de disconnected
        return global.connection;                                       //Retorne a variável global
    
                      //  'mysql2' modulo contém o objeto que faz a promessa
    const mysql = require("mysql2/promise"); 

                                    //SGBD: MySQL root:senha Porta: 3306 Banco: banco_alguma_coisa
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/projeto_node");
    console.log("Conectou no MySQL!");

    
    // A variável global é criada aqui, mas é verificada na linha 5, através da condicional
    global.connection = connection;
    return connection; // Se o retone da linha 6 não ocorrer, ocorre esse aqui

}

connect();

module.exports = {} // Se quiser descomplicar o seu código, pode passar aqui o a connection, mas se quiser fazer algum tipo de validação, deixa com o if da linha 5