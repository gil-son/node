// Repare que ele exporta com um parâmetro que no momento não existe aqui, mas só durante o require do app.js na linha 10
module.exports = function(app){

    app.get('/', function(req, res){
        res.render('../app/views/home/index'); // Como essa parte será renderizada no app.js é preciso que o caminho seja feito considerando lá como o início
    });
}
