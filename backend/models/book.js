const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    year: Number,
    genre: String,
    publisher: String,
    synopsis: String,
    cover: String
})

module.exports = mongoose.model("Book", bookSchema);