const express = require('express');
const mysql = require('mysql');
const server = express();

// Middleware
server.use(express.json());


const connection = mysql.createConnection({
    host: "",
    user: "root",
    password: "",
    database: "blog"
});

server.get("/postagens", (req, res) =>{
    // teste
    // res.json({
    //     messagem: "Olá, mundo"
    // })

    const query = "SELECT * FROM postagens";
    connection.query(query, (error, result) => {
        if (error){
            res.send(error);
        }else{
            res.send(result);
        }
    });

});


server.post("/postagens", (req, res) => {
    const { titulo, descricao } = req.body; // recuperando os valores do body,

    // teste para ver se está pegando os valores
    // res.json({
    //     // titulo: titulo, quando chave e valor tem o mesmo nome, pode deixar apenas a chave
    //     titulo,
    //     descricao: descricao
    // })

    connection.query(`INSERT INTO postagem() values('${titulo}','${descricao}')`, (err, result) => {
        if(error){
            res.send(error);
        }else{
            res.status(201).send("Postagem cadastrada"); // 201 é referente ao status code
        }
    });

});


server.listen(3333, () =>{
    console.log("Servidor ativo");
});