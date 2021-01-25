/* app contém: mysql, express, commonjs, ejs e consign*/
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var {check, validationResult} = require('express-validator');


var app = express();
app.set('view engine','ejs');
app.set('views','././app/views'); // pasta e path ajustados

// urls codificadas sejam interpretadas via JSON, permitindo uma completa passagem de parâmetros de objetos e matrizes no formato Array.
app.use(bodyParser.urlencoded({extended:true}));

consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app);

module.exports = app;