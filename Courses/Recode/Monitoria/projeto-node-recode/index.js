import express from 'express';
import cors from 'cors';

const server = express();  // microframework 
server.use(express.json()) // Indica que todos os dados da aplicação serão em json
server.use(cors()); // npm i cors

const usuarios = ["A","B","C","D"];


// SELECT * FROM usuarios
// http://localhost:3333/usuarios

server.get("/usuarios",(req, res) =>{
    res.json(usuarios);
})

// SELECT * FROM usuarios WHERE ID = 1
// http://localhost:3333/usuarios
server.get("/usuarios/:index", (req, res) => { 
    const {index} = req.params 
    res.json(usuarios[index])
})


// INSERT INTO usuarios (name) values (':name')
server.post("/usuarios", (req, res) => { 
    const {nome} = req.body

    usuarios.push(nome)
    res.json(usuarios["Usuário cadastrado!"])
})

//UPDATE usuarios SET nome = "" WHERE id = 3

// 1 - Recuperando o parâmetro
// 2 - Recupernado o valor enviado através do corpo da requisição

// server.put("/usuarios/:index", (req, res) => {
//     const {index} = req.params; // Params para URL e Body ...
//     const valorDoParametro = req.body.name;

//     res.json({
//         id: index,
//         nome: valorDoParametro
//     })

// })

server.put("/usuarios/:index", (req, res) => {
    const {index} = req.params; // Params para URL .
    const {name}= req.body; // e Body ..

    
    // const index = 1
    // const name = "Caio"

    usuarios[index] = name

    // Exibindo os usuários
    res.json(usuarios);

})


// DELETE FROM usuarios WHERE id = :id

server.delete("/usuarios/:index", (req, res) => {
    const { index } = req.params;

    usuarios.splice(index,1);
    res.json(usuarios);
})

// CREATE, READ, UPDATE, DELETE
// UPDATE, SELECT, UPDATE e DELETE


server.listen(3333, () => { //pois o react roda na 3000
    console.log("Rodou o servidor"); // a função de callback é opcional
}); 

