var express = require('express');
var app = express();



    app.get('/', function(req, res){
        res.sendFile(__dirname + "/pages/index.html");
    });

    app.get('/artigo', function(req, res){
        res.sendFile(__dirname + "/pages/artigo.html");
    });

    app.get('/contato', function(req, res){
        res.sendFile(__dirname + "/pages/contato.html");
    });

    // app.get('*', function(req, res){
    //     res.sendFile(__dirname + "/erro.html");
    // });


    app.get('*', function(req, res){
        res.sendFile(__dirname + "/pages/erro.html", function(err){
            res.send(`<html><body><h1> ${err.message} </h1></body></html>`)
        });
    });







app.listen(3003, function (){
    console.log('Example app listening on port 3003!');
});