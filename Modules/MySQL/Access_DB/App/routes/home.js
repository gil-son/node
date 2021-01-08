module.exports = function(app){ 
    app.get('/', function(req,res){ // Quando estiver no local:porta/
    res.render('home/index') // para esse diretório e responde com a sua renderização
});
}
// 2 - O módulo é exportado com a função