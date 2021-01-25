import express from 'express';

const server = express();  // microframework 
server.use(express.json()) // Indica que todos os dados da aplicação serão em json

// sem REST

// get == SELECT
// post == INSERT
// put == UPDATE
// delete == UPDATE


// com REST

// https:fullstackeletro.com.br/usuarios == GET
// https:fullstackeletro.com.br/usuarios == POTS
// https:fullstackeletro.com.br/usuarios/4 == PUT
// https:fullstackeletro.com.br/usuarios/5 == DELETE

// CRUD USANDO ARRAY

const usuarios = ["A","B","C","D"];
// const multUsuarios = [["A","B"],["C"],["D"]];

// SELECT * FROM usuarios
// http://localhost:3333/usuarios
// server.get("/usuarios",(req, res) =>{
//     res.json(usuarios);
// })


// server.get("/usuarios",(req, res) =>{ // Navegador só mostra os dados
//     res.json({
//         nome: "A",
//         idade: 1
//     });
// })

// http://localhost:3333/usuarios/3
// server.get("usuarios/:idex", (req, res) => { 
//     const valor = req.params.index 
//     res.json({
//         id: valor
//     })
// })

// Se é um objeto, pode desinstruturar



// server.get("usuarios/:index", (req, res) => {
//     const { index } = req.params;
//     res.json(usuarios[index]);
// });


server.post("usuarios/:idex", (req, res) => { 
    const {index} = req.params 
    res.json(usuarios[index])
})

// Json com multi valores

// server.get("usuarios/:idex/:index2", (req, res) => { 
//     const valor = req.params.index 
//     res.json(usarios[index][index2])
// })




server.listen(3333, () => { //pois o react roda na 3000
    console.log("Rodou o servidor"); // a função de callback é opcional
}); 

