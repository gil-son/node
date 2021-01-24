module.exports = function (app){

    app.get('/usuarios', function(req, res){
        
        var connection = app.app.config.database();

        var query = app.app.models.usuarioModel;
        query.getUsuarios( connection,
        function(error, reults, fields){
            console.log(error, results);
            res.render('paginas/usuarios', {dados: results});
        });
    });

    app.post('usuario/buscar/email', function(req, res){
        var usuario = req.body;
        var connection = app.app.config.database();
        var usuarioModel = app.app.models.usuarioModel;

        usuarioModel.getUsuarioEmail(usuario, connection, function(error, results){
            console.log(error, results, usuario);
            res.render('paginas/usuarios',{dados:results});
        });
    });

    app.post('/usuario/buscar/id', function(req, res){
        var usuario = req.body;
        var connection = app.app.config.database();
        var usuarioModel = app.app.models.usuarioModel;

        usuarioModel.getUusuarioId(usuario, connection, function(error, results){
            console.log(error, results);
            res.render('paginas/usuarios', {dados:results})
        });
    });

}