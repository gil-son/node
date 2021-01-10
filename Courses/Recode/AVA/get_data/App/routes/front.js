var db = require('../config/databases');

module.exports = function(app){
    var connection = db();

    app.get('/frontend', function(req, res){
        var query = connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'",
        function(error, results, fields){
            // console.log("Dados:")
            // console.log(results)
            console.log(error, results)

            // var string = JSON.stringify(results);
            // var json =  JSON.parse(string);

            // console.log("JSON:")
            // console.log(json)
            // var json2 = json[0].categoria;

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