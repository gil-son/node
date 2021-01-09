/* app contém: mysql, express, commonjs, ejs */
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views','././app/views'); // pasta e path ajustados
module.exports = app;
