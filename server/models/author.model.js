const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "Author must have a name"],
        minlength: [3, "Author's name must be at least 3 characters"]
    }
},
{timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;