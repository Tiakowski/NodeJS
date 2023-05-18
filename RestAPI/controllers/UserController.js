var User = require("../models/User")

class UserController {
    async index(req, res){}

    async create(req, res){
        console.log(req.body)
        var{email, name, password} = req.body;
        if(email == undefined){
            res.status(400);
            res.json({error: "Email inválido", sytax:"'email': 'email@dominio.com'"})
            return;
        }

        var emailExists = await User.findEmail(email);
        console.log(emailExists)

        if(emailExists){
            res.status(406);
            res.json({err: "O email já está cadastrado"});
            return;
        }
        
        await User.new(email, password, name);

        res.status(200);
        res.send("Ok");
    }
}

module.exports = new UserController();