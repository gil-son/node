const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buscaCep = require("./src/functions/buscaCep");

// renderização minha página principal
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine","ejs");
app.set("views","./src/views");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/envia-cep", async (req, res) =>{
  
    // console.log(cep);
    // res.render("index");
    const {cep} = req.body;
    const resultado = await buscaCep(cep);
    console.log(resultado);
    res.render('resultado',{dado:resultado});
});



app.listen(3333);