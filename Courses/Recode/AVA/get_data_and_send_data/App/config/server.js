/* app contém: mysql, express, commonjs, ejs e consign*/
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs');
app.set('views','././app/views'); // pasta e path ajustados


app.use(bodyParser.urlencoded({extended:true}));

consign()
.include('././app/routes')
.then('././app/config/database.js')
.then('././app/models')
.into(app);

module.exports = app;