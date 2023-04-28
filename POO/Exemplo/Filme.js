class Filme{

    constructor(titulo,ano,genero,diretor,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }

    Reproduzir(){
        console.log("Reproduzindo")
    }

    Pausar(){
        console.log("Pausado")
    }

    Avancar(){
        console.log("Avançar >>")
    }

    Fechar(){
        console.log("Fechar")
    }
    
    Ficha(){
        console.log("Titulo: " + this.titulo)
        console.log("Ano de lançamento: " + this.ano)
        console.log("Gênero: " + this.genero)
    }
}

var batman = new Filme("The Batman", 2022, "Ação","Matt Reeves",176)

batman.Ficha()