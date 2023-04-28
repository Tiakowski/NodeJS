const bodyParser = require("body-parser");
var express = require("express");
const flash = require("express-flash");
var session = require("express-session");
const cookieParser = require("cookie-parser"); 
var app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cookieParser("flamengo"));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge:60000 }
}))

app.use(flash());

app.get("/",(req,res) => {
    var emailError = req.flash("emailError");
    var pontosError = req.flash("pontosError");
    var nameError = req.flash("nameError");

    var email = req.flash("email");
    var name = req.flash("name");

    emailError = (emailError == undefined || emailError.lenght == 0) ? undefined : emailError;
    email = (email == undefined || email.lenght == 0) ? "": email;
    name = (name == undefined || name.lenght == 0) ? "": name;
    

    res.render("index",{emailError, pontosError, nameError, email,name});
});

app.post("/form",(req, res) =>{
    var {email, name, pontos} = req.body;

    var emailError;
    var pontosError;
    var nameError;
    console.log(nameError)

    if(email == undefined || email == ""){
        emailError = "O Email nao pode ser vazio";
    }

    if(name == undefined || name == ""){
        nameError = "O nome nao pode ser vazio";
    }

    if(pontos == undefined || pontos < 10){
        pontosError = "Nao pode ter menos de 10 pontos";
    }

    if(emailError != undefined || pontosError != undefined || nameError != undefined){
        req.flash("emailError", emailError);
        req.flash("nameError", nameError);
        req.flash("pontosError", pontosError);

        req.flash("email", email);
        req.flash("name", name);
        req.flash("pontos", pontos);

        res.redirect("/")
    } else {
        res.send("Show")
    }




})

app.listen(2019,(req, res) => {
    console.log("Servidor online")
});