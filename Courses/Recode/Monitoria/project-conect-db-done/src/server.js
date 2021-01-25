var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

const server = express();


server.use(express.json());
server.use(cors());


server.get("/usuarios", (req, res) => {
    res.send("abc");
});

server.listen(3333, () =>{
    console.log("Servidor ativo!");
});
