const Comment = require("../models/comment");

class CommentRepository {
    static async getByIsbn(isbn) {
        return await Comment.find({isbn: isbn});
    }

    static async create(commentData) {
        const comment = new Comment(commentData);
        return await comment.save()
    }
}

module.exports = { CommentRepository };