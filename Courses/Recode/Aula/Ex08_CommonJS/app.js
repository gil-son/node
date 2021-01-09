// Aqui tem a inclusão do server que trás o app setado com o express, ejs e commonjs

var app = require('./app/config/server');     


// Aqui tem a inclusão dos arquivos de rotas

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/backend')(app);
var rotaHome = require('./app/routes/frontend')(app);
var rotaHome = require('./app/routes/infraestrutura')(app);


app.listen(3000, function(){
    console.log("Servidor Rodando com Express e EJS");
});