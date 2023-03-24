const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs'); //Mandando o Express usar o EJS como View Engine
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res) => {

    res.render("index");
});

app.get("/perguntar",(req,res) => {

    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("Formulario Recebido! Título: "+ titulo);
});

app.listen(8181,() => {console.log("Servidor On-line");});