let express = require("express");
let app = express();

app.get("/",(req, res) => {
    res.json({});
})

app.get("/time/:pessoa", (req, res) => {
    let pessoa = req.params.pessoa;
    if(pessoa == "tiago"){
        res.json({time: "Flamengo"});
    }
})

module.exports = app;