var jwt = require("jsonwebtoken");
var secret = "aoqighaiugqiaph";


module.exports = function(req, res, next){
    const authToken = req.headers['authorization'];
    console.log(authToken);
    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];
        try{
            var decoded = jwt.verify(token, secret);
            
            if(decoded.role == 1){
                next();
            } else {
                res.status(401);
                res.send("Usuário não autorizado!");
                return;
            }
        }catch(err){
            res.status(401);
            res.send("Não autorizado!");
            return;
        }     
    } else {
        res.status(401);
        res.send("Token Undefined");
        return;
    }
}