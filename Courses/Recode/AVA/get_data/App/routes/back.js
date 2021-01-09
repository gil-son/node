module.exports = function(app){
    app.get('/backend', function(req, res){
        res.render('paginas/backend');
         /* Como essa parte será renderizada no app.js é preciso que o caminho seja feito considerando lá como o início
            Lembre-se que parte do caminho foi configurado já no app.set()
         */
        });
}