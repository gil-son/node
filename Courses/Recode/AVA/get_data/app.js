var app = require('./app/config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/front')(app);
var rotaHome = require('./app/routes/back')(app);

app.listen(3001, function(){
    console.log("Servidor rodando!");
})