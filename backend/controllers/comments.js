const { response, request } = require('express');
const { CommentRepository } = require('../repositories/comment');

const getCommentsByIsbn = async (req = request, res = response) => {
    const { isbn } = req.params;

    try {
        const result = await CommentRepository.getByIsbn(isbn);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

const createNewComment = async (req = request, res = response) => {
    const { isbn, username, content } = req.body;
    const commentData = { isbn, username, content };
    
    try {
        const savedComment = await CommentRepository.create(commentData);
        res.status(201).json(
            savedComment
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear el nuevo elemento"
        });
    }
}

module.exports = {
    getCommentsByIsbn,
    createNewComment
}