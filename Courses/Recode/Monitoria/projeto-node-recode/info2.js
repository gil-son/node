import express from 'express';
import { connect } from 'http2';
const server = express(); 

// REST são a regras
// REST FULL é quem atende as regras
// REST é uma arquitetura, para desenvolvimento de APIs


// Exemplo sem o conceito de REST

// Sem REST

// https://localhost:3333/usuarios == GET
// https://localhost:3333/usuarios/salvar == POST
// https://localhost:3333/usuarios/atualizar == POST
// https://localhost:3333/usuarios/remover == POST

// Métodos REST

// GET == SELECT
// POST == INSERT
// PUT == UPDATE
// DELETE == DELETE


// COM REST

// https://localhost:3333/usuarios == GET
// https://localhost:3333/usuarios == POST
// https://localhost:3333/usuarios == PUT
// https://localhost:3333/usuarios == DELETE

// https://localhost:3333/usuarios == GET    Select * from usuarios
// https://localhost:3333/usuarios == POST
// https://localhost:3333/usuarios/:id == PUT
// https://localhost:3333/usuarios/:id == DELETE

// Insommia ou post p/ testar

server.get("/usuarios",(req, res) => {

});

server.post("/usuarios",(req, res) => {

});

server.put("/usuarios/:id", (req, res) => {
    const{ id } = req.params

    connect.query(`UPDATE usuarios SET name = ${id}`);

});


server.delete("/usuarios/:id", (req, res) => {

});





server.listen(3333, () => { //pois o react roda na 3000
    console.log("Rodou o servidor"); // a função de callback é opcional
}); 

