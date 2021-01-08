var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World!");
});

app.get('/sobre', function(req, res){
    res.send("Sobre");
});

app.get('/blog', function(req, res){
    res.send("Blog");
});

app.listen(3002, function (){
    console.log('Example app listening on port 3000!');
});