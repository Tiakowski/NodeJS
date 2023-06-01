const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://127.0.0.1:27017/mongo").then(() => {
    console.log("Conexão feita!")
}).catch( err => {
    console.log(err)
})

const Article = mongoose.model("Article", articleModel);


Article.findByIdAndUpdate("6477da2ac8e5fbe5b6c71ff3",{
    title: "VueJS",
    author: "Guilherme Silveira",
    date: Date.now()
}).then(() => {
    console.log("Atualizado")
}).catch( err => {
    console.log(err)
})

/*
Article.findByIdAndDelete("6477d3d882c006c9cb3f3612").then( () =>{
    console.log("Dado deletado");
}).catch(err => {
    console.log(err)
});

*/

/* Buscar dados 
Article.find({'_id':'6477d3d882c006c9cb3f3612'}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});

*/




/* Cadastro de dados
const artigo = new Article({title: "O que você precisa saber sobre o H1N1 e vacinas", 
                            author: "Atila Iamarino", 
                            body:"O influenza muda o tempo todo, a cada pessoa infectada, em cada país.",
                            special: true,
                            resume:{
                                content: "bla bla bla",
                                author: "teste"
                            }
                            });
artigo.save();
*/