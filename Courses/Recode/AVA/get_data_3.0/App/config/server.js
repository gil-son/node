/* app contém: mysql, express, commonjs, ejs e consign*/
var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine','ejs');
app.set('views','././app/views'); // pasta e path ajustados


/* indica onde obter as rotas e em sequência o local do banco, o
    que permite sinalizar ao ambiente onde obter as rotas de URL.
    Com isso não precisemos chamar em cada arquivo o require
    de conexão no banco.
 */
consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app);

module.exports = app;