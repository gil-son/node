// Repare que ele exporta com um parâmetro que no momento não existe aqui, mas só durante o require do app.js na linha 11
module.exports = function(app){

    app.get('/infraestrutura', function(req, res){
        res.render('../app/views/secao/infra'); // Como essa parte será renderizada no app.js é preciso que o caminho seja feito considerando lá como o início
    });

}