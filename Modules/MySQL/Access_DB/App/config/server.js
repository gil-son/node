var express = require('express'); // solicitando a dependência/módulo do express
var consign = require('consign');


var app = express();

app.set('view engine','ejs'); // o módulo express está vinculado com o módulo ejs que por padrão busca no diretório views
app.set('views','././app/views'); // setando com o diretório views


consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app);



module.exports = app;

// 1 - Aqui cria o app e exporta