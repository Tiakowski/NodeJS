const fs = require("fs");

fs.readFile("./exemplo.txt",{encoding: 'utf-8'} ,(erro, dados) => {
        if(erro){
            console.log("Ocorreu um erro durante a leitura")
        }else{
            console.log(dados);
        }
});

fs.writeFile("./exemplo.txt","Novo conteudo", (err) => {
    if(err){
        console.log("Erro durando o salvamento")
    }

});

//----------------------------JSON-----------------------------------------------------------------------

fs.readFile("./usuario.json",{encoding: 'utf-8'} ,(erro, dados) => {
    if(erro){
        console.log("Ocorreu um erro durante a leitura")
    }else{
        var conteudo = JSON.parse(dados);
        console.log(conteudo)
    }
});