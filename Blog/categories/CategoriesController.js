const express = require("express");
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

//Direcionar para a pagina de criação de categorias
router.get("/admin/categories/new",(req, res) => {
    res.render("admin/categories/new");
});

//Criar a categoria
router.post("/categories/save", (req,res) => {
    var title = req.body.title;
    if (title != undefined){

        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect("/admin/categories");
        })

    }else{
        res.redirect("/admin/categories/new")
    }
});

//Direcionar para a pagina de categorias
router.get("/admin/categories",(req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories:categories});
    })

    
});

//Deletar categorias
router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if ( id != undefined){ //Se o ID não for nulo
        if(!isNaN(id)){ 

            Category.destroy({
                where: {
                    id:id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            })

        }else{ //Se o ID nao for um número
            res.redirect("/admin/categories");
        }
    } else {
        res.redirect("/admin/categories");
    }

});

//Buscar categoria por ID
router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/categories");
    }

    Category.findByPk(id).then(category => {
        if(category != undefined){
            res.render("admin/categories/edit", {category:category});

        } else {
            res.redirect("/admin/categories");
        }
    }).catch(erro => {
        res.redirect("/admin/categories");
    })
});

//Atualizar a categoria
router.post("/categories/update", (req,res) => {
    var id = req.body.id;
    var title = req.body.title;

    Category.update({title:title, slug: slugify(title)}, {
        where: {
            id:id
        }
    }).then(() =>{
        res.redirect("/admin/categories");
    })

})

module.exports = router;