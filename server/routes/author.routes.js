const AuthorController = require("../controllers/author.controller");

module.exports = app => {

    //CREATE
    app.post("/api/authors/create", AuthorController.createAuthor);
    //READ ALL
    app.get("/api/authors", AuthorController.findAllAuthors);
    //READ ONE
    app.get("/api/authors/:_id", AuthorController.findOneAuthor);
    //UPDATE ONE
    app.put("/api/authors/update/:_id", AuthorController.updateOneAuthor);
    //DELETE ONE
    app.delete("/api/authors/delete/:_id", AuthorController.deleteOneAuthor);
}