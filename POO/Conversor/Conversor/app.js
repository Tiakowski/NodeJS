var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
    var dados = await leitor.Read("./filmes.csv");
    var dadosProcessados = Processor.Process(dados);

    var filmes = new Table(dadosProcessados)
    
    var html = await HtmlParser.Parse(filmes);

    escritor.Write(Date.now()+'.html', html);
    PDFWriter.Write(Date.now() + ".PDF", html);

    
}

main();