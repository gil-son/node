var express = require('express');
var app = express(); //ejs é nativo e está oculto

app.set('view engine','ejs'); 

//rotas p/ renderizar os arquivos ejs
app.get('/', function(req, res){
    res.render('../app/view/home/index');
});

app.get('/frontend', function(req, res){
    res.render('../app/view/secao/frontend');
});


app.get('/backend', function(req, res){
    res.render('../app/view/secao/backend');
});

app.get('/infraestrutura', function(req, res){
    res.render('../app/view/secao/infraestrutura');
});

app.listen(3000, function(){
    console.log("Servidor Rodando com Express e EJS");
})