const Author = require("../models/author.model");

//CREATE
module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.json({message: "Error adding a new author", error: err}))
}

//READ ALL
module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json({message: "Error finding all authors", error: err}))
}

//READ ONE
module.exports.findOneAuthor = (req,res) => {
    Author.find({_id: req.params._id})
    .then(singleAuthor => res.json(singleAuthor))
    .catch(err => res.json({message: "Error finding one Author", error: err}))
}

//UPDATE ONE AUTHOR
module.exports.updateOneAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
    .then(updateAuthor => res.json(updateAuthor))
    .catch(err => res.json({message: "Error updating one Author", error: err}))
}

//DELETE ONE AUTHOR
module.exports.deleteOneAuthor = (req,res) => {
    Author.deleteOne({_id: req.params._id})
    .then(deleteAuthor => res.json(deleteAuthor))
    .catch(err => res.json({message: "Error deleting one Author", error: err}))
}