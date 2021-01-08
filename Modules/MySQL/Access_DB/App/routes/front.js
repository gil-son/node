module.exports = function(app){

    
    app.get('/frontend', function(req,res){

        var query = app.app.config.database();
        
        var query = app.app.models.conteudoModel;
        query.getConteudo( connection,
                function(error, results, fields){
                console.log(error, results)
                res.render('paginas/frontend',{database:results});
        });
    });

}

// 2 - O módulo é exportado com a função