const { check, validationResult } = require("express-validator");

module.exports = function (app) {

    app.get('/usuariocad', function (req, res) {
        res.render('paginas/usuariocad',{validacao:{errors:{},}, dados:{}});
    });

    app.post('/usuario/salvar',[
        check('nome','Nome é obrigatório').exists(),
        check('usuario','Usuário é obrigatório!').exists().isLenght({min:5, max:15}),
        check('senha', 'A senha precisa ter no mínimo 5 digítos e no máximo 15!').exists().isLenght({min:5, max:15}),
        check('email', 'E-mail é obrigatório').isEmail().normalizeEmail()
    ], function( req, res){



        var usuario = req.body;
        var erros = validationResult(req);

        if(!erros.isEmpty()){
            res.render("paginas/usuariocad", {validadacao:erros, dados:usuario});
            console.log(erros);
            return;

        }


        var connection = app.app.config.database();
        var usuarioModel = app.app.models.usuarioModel;
        usuarioModel.setUsuario(usuario, connection, function(error, results){

        });

        usuarioModel.getUsuarios(connection,
            function (error, results, fields) {
            console.log(error, results)
            res.render('paginas/usuarios', { dados: results })
        });

    });
}



// app.post('/usuario/salvar', function (req, res) {
//     var usuario = req.body;
//     var connection = app.app.config.database();
//     var usuarioModel = app.app.models.usuarioModel;

//     usuarioModel.setUsuario(usuario, connection, function (error, results) {

//     });