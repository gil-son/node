var app = require('./app/config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/back')(app);
var rotaHome = require('./app/routes/front')(app);


app.listen(3000, function(){
    console.log("Servidor rodando com Express!");
})

// 3 - Pega o app por require e envia por rotas