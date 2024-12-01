const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    isbn: String,
    username: String,
    content: String
})

module.exports = mongoose.model("Comment", commentSchema);