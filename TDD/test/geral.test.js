let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131", async () => {
   
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
/*
    try{
        let res = await request.get("/");
        expect(res.statusCode).toEqual(200);
    }catch(error){
        console.log(error)
    }
*/
    
});

test("Deve retornar Flamengo como time favorito do Tiago",() => {
    return request.get("/time/tiago").then(res => { 
        expect(res.body.time).toEqual("Flamengo")
        expect(res.statusCode).toEqual(200)
        }       
        );

}); 