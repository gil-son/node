import express from 'express';

const server = express(); 
server.use(express.json()) // Indica que todos os dados da aplicação serão em json

const usuarios = ["A","B","C","D"]

// SELECT * FROM usuarios
server.get("/usuarios", (req, res) => {
    res.send(usuarios);
});



// SELECT * FROM usuarios WHERE id = index/id
    // server.get("/usuarios/:index", (req, res) => {
    //     const { index } = req.params;
    //     res.json(usuarios[index]);
    // });

// INSERT INTO usuarios(name) VALUES ("Fulano")
/*
    {
        "name" : "Fulano"
    }
*/

    // server.post("/usuarios", (req, res) => {
    //     const { name } = req.body; // Request Body
    //     res.json(name);
    // });

    // server.post("/usuarios", (req, res) => {
    //     const { name } = req.body; // Request Body
    //     const { idade } = req.body; 
    //     res.json(name); 
    // });

    // server.post("/usuarios", (req, res) => {
    //     const { name, idade } = req.body; // Request Body
    //     res.send(name + " " + idade); 
    // });

    server.post("/usuarios", (req, res) => {
        const { name } = req.body; // Request Body
        usuarios.push(name); // Insert
        res.json(`${name} foi cadastrado(a)! `); 
    });


server.listen(3333, () => { //pois o react roda na 3000
    console.log("Rodou o servidor"); // a função de callback é opcional
}); 

