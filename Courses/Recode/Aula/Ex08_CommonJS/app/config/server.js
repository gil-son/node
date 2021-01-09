// common para modulos
// express para rotas
// ejs para views

var express = require('express');
var app = express(); 

app.set('view engine','ejs'); 

module.exports = app;


