var database = require("./database");

// Inserir dados:

/*
var dados = [
    {
    nome: "Valorant",
    preco: 0
    },
    {
    nome: "FIFA 23",
    preco: 250
    },
    {
    nome: "Fortnite",
    preco: 0
    }


]

var query = database.insert(dados).into("games").then( data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/


//Select

/*
var query = database.select(["nome","preco"]).table("games").then( data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

// WHERE
/*
database.select()
    .whereRaw("nome = 'FIFA 23' or preco < 10")
    .table("games").then( data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    });

*/


// Query
/*
database.raw("SELECT * FROM games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
*/

// Delete

/*
database.where({id: 1}).delete().table("games").then( data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

//Update
/*
database.where({nome: "FIFA 23"}).update({preco: 200}).table("games").then(data => {
    console.log(data);
}).catch( err => {
    console.log(err);
});
*/

//OrderBy
/*
database.select().table("games").orderBy("preco","desc").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
}); // desc //asc
*/


//Associated inserts

/*
database.insert({
    nome: "EA Sports",
    game_id: 4
}).table("estudios").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err)
});
*/


// Join 1 pra 1

/*
database.select(["games.*","estudios.nome as estudio"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then( data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
*/


// Iner Join 1 para N (Com os estudios no mesmo array)

/*
database.select(["games.*","estudios.nome as estudio"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then( data => {
    var estudiosGames = data;
    var game = {
        id: 0,
        nome: "",
        estudios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach( estudio => {
        game.estudios.push({nome: estudio.estudio});
    });
    console.log(game);

}).catch(err => {
    console.log(err)
});

*/



//Relaciomanento N to N

/*
database.select([
    "estudios.nome as estudio_nome",
    "games.nome as game_nome"
]).table("games_estudios")
    .innerJoin("games","games.id","games_estudios.game_id")
    .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
    .where("games.id",4)
    .then( data => {
        console.log(data);
    }).catch( err => {
        console.log(err);
    });
    */



// Usando transaction

/*
async function transacao(){
    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Annapurna"}).table("estudios");
            await database.insert({nome: "Microsoft"}).table("estudios");
        });
    }catch(err){
        console.log(err);
    }
}

transacao();

*/