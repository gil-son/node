/*
    Criando projeto React: npx create-react-app nome-projeto
    Iniciando projeto React: npm start

    Criando projeto NodeJS: npm init, gera o arquivo package.json
*/

import express from 'express';
const server = express(); // habilitado no package.json o type:module que é nativo e instala o sucrase

//console.log(express); // É um objeto que executa e retorna diversos métodos


// Query params == localhost:3333/usuarios?name=Fulano

// server.get("/usuarios", ( req, res ) => {
//     const valueParam = req.query.name
//     res.send(`Olá, ${valueParam}`);
// });


// Routes params:  == localhost:3333/usuarios/:id
// http://localhost:3333/usuarios/3

// server.get("/usuarios/:id", ( req, res ) => {
//     const valueParam = req.params.id
//     res.send(`O id: ${valueParam}`);
// });

server.get("/usuarios/:id", ( req, res ) => {
    const {id} = req.params  // desistrituração, usando o atributo id do objeto
    res.send(`O id: ${id}`);
});


// Request Body


server.listen(3333, () => { //pois o react roda na 3000
    console.log("Rodou o servidor"); // a função de callback é opcional
}); 

