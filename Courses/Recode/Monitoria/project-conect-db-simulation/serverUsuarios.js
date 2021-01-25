// Se quiser autenticar a API, é pelo JWT, assim é possível determinar permissões de acesso o que envol JSON

var express = require('express');
var cors = require('cors');

const server = express();


server.use(express.json());
server.use(cors());


const usuarios = ["a","b","c"];


server.get("/pagina", (req, res) =>{
    res.json({
        nome: "A",
        idade: 15
    })
});

// http://localhost:3333/paginaparametros/3
server.get("/paginaparametros/:index", (req, res) =>{
    const valor = req.params.index;
    res.json({
        id: valor
    });
});

server.get("/usuarioespecifico/:index", (req, res) => {
    const valor = req.params.index
    res.json(usuarios[valor]);
});

/* 
    req{
        parms{
            index:
        }
    }

*/

server.get("/usuarios", (req, res) => {
    res.json(usuarios);
});


server.put("/cadastrausuarios", (req, res) => { // Pra usar a regra de REST, usamos put ao invés de post. Se todos os verbos ficarem coerente, a aplicação ficar RESTFUL
    const {name} = req.body;
    usuarios.push(name);
    res.json("Usuário Cadastrado")
});


// server.post("/cadastrausuarios", (req, res) => { 
//     const {name} = req.body;
//     usuarios.push(name);
//     res.json("Usuário Cadastrado")
// });



server.delete("/deletarusuario/:index", (req, res) => {
    const valor = req.params.index
    usuarios.splice(valor);
    res.json("Usuário deletado")
});





server.listen(3333, () =>{
    console.log("Servidor ativo!");
});