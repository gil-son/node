var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

const server = express();


server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"recode_monitoria_node"
});



server.get("/usuarios", (req, res) => {
    connection.query("SELECT * FROM usuario", (error, result) =>{
        
        if(error){
            res.send(error); // No frontend recupera o error, sem renderizar no backend
        }else{
            res.send(result);
        }
    });
});


server.post("/usuarios", (req, res) =>{ 
    const {name} = req.body;
    res.send(name); // Debug
    connection.query(`INSERT INTO usuario(name) values('${name}')`, (error, result) =>{
        if(error){
            res.send("Erro ao inserir usuário"); 
        }else{
            res.status(201).json
            ({
                message: "Usuário Cadastrado com Sucesso!"
            });
        }
    });
});


server.listen(3333, () =>{
    console.log("Servidor ativo!");
});
