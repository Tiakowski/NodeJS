const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "flamengo"



app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

function auth(req, res, next){
    const authToken = req.headers['authorization'];
    if (authToken != undefined){
        const bearer = authToken.split(' ');
        token = bearer[1];
        jwt.verify(token, JWTSecret,(err, data) => {
            if (err){
                res.status(401);
                res.json({err:"Não autorizado"});
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email}
                next()
            }
        })

    } else {
        res.status(401);
        res.json({err: "Token inválido"})
    }
}


var DB = {
    games: [
        {
            id: 1,
            title:"Valorant",
            year:"2019",
            price:"0"
        },
        {
            id: 2,
            title:"Minecraft",
            year:"2010",
            price:"60"
        },
        {
            id: 3,
            title:"Call of Duty: Modern Warfare",
            year:"2022",
            price:"300"
        }
    ],
    users: [
        {
            id: 1,
            nome:"Tiago Santos",
            email: "tiagosantosflamengo@gmail.com",
            password: "teamoarraxca"
        },
        {
            id: 2,
            nome:"Vinicius Viana",
            email:"viniciusvianavasco@bol.com",
            password: "teamoribamar"
        },
        {
            id: 3,
            nome:"Matheus Pagehu",
            email:"pageco@hotmail.com",
            password: "teamomaconha"
        }
    ]
}

app.get("/games",auth,(req,res) => {

    var HATEOAS = [
        {
            href: "http://localhost:8080/game/0",
            method: "DELETE",
            rel:"delete_game"
        },
        {
            href: "http://localhost:8080/game/0",
            method: "GET",
            rel:"get_game"

        },
        {
            href: "http://localhost:8080/auth",
            method: "POST",
            rel:"login"
        }
    ]

    res.statusCode = 200;
    res.json({games: DB.games, _links: HATEOAS});
});

app.get("/game/:id",(req,res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        var id = parseInt(req.params.id);

        var HATEOAS = [
            {
                href: "http://localhost:8080/game/"+id,
                method: "DELETE",
                rel:"delete_game"
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "PUT",
                rel:"edit_game"
    
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "GET",
                rel:"get_game"
    
            },
            {
                href: "http://localhost:8080/games",
                method: "GET",
                rel:"get_all_games"
            }
        ]


        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.sendStatus = 200;
            res.json({game, _links: HATEOAS});

        } else {
            res.sendStatus(404);
        }

    }

});

app.post("/game",(req,res) => {
    var {title, price, year} = req.body;
    DB.games.push({
        id: 5,
        title,
        price,
        year
    });

    res.sendStatus(200)
})

app.delete("/game/:id",(req,res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        } else {
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }

});

app.put("/game/:id",(req,res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            var {title, price, year} = req.body;

            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }

            res.sendStatus(200);
        

        } else {
            res.sendStatus(404);
        }

    }

});

app.post("/auth",(req,res) => {
    var {email, password} = req.body;

    if(email!= undefined){
        var user = DB.users.find(u => u.email == email);
        if (user != undefined){

            if (user.password == password){

                jwt.sign({id: user.id,email: user.email},JWTSecret,{expiresIn:"48h"},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err:"Falha interna"})
                    } else {
                        res.status(200);
                        res.json({token: token});
                    }
                });
            } else {
                res.status(401);
                res.json({err: "Credenciais inválidas"})
            }

        } else {
            res.status(404);
            res.json({err: "Email não cadastrado"})
        }

    } else {
        res.status(400)
        res.json({err: "Email inválido"});
    }


});




app.listen(8080,() => {
    console.log("Servidor On-line");
});