var express = require('express');
const server = express();
server.use(express.json());


const multUsuarios = [["a1","b1"],["a2","b2"]];

server.get("/usuarioespecifico/:index1/:index2", (req, res) => {
        const valor1 = req.params.index1
        const valor2 = req.params.index2

        res.json(multUsuarios[valor1][valor2]);
    });





server.listen(3333, () =>{
    console.log("Servidor ativo!");
});