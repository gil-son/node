

module.exports = function(app){
    
    app.get('/frontend', function(req, res){

        var connection = app.app.config.database();

        var query = connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'",
        function(error, results, fields){
          console.log(error, results)
          res.render('paginas/frontend',{dados:results});
        });
    
         /* Como essa parte será renderizada no app.js é preciso que o caminho seja feito considerando lá como o início
            Lembre-se que parte do caminho foi configurado já no app.set()
         */

        

         query.on('error',function(error){
            console.log("[mysql] error:", error);
         });

    });
}