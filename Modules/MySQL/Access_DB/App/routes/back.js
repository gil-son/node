module.exports = function(app){
    app.get('/backend', function(req,res){ // Quando estiver no local:porta/backend
    res.render('paginas/backend') // para esse diretório e responde com a sua renderização
});
}

// 2 - O módulo é exportado com a função