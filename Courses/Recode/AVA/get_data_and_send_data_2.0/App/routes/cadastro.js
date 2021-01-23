module.exports = function(app){

    app.get('/cadastro', function(req, res){
        res.render('paginas/cadastro');
    });

    app.post('/cadastro/salvar', function(req, res){
        var conteudo = req.body;
        var connection = app.app.config.database();
        var conteudoModel = app.app.models.conteudoModel;
   

        conteudoModel.salvarConteudo(conteudo, connection, function(error, results){

        });

        conteudoModel.getConteudo(connection,
            function(error, results, fields){
            console.log(error, results)
            res.render('home/index',{dados:results})
        });
    });
}