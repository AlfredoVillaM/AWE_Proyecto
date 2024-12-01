const { response, request } = require('express');
const { BookRepository } = require('../repositories/book');

const getAllBooks = async (req = request, res = response) => {
    const { searchTerm } = req.query; 

    try {
        // const result = await BookRepository.getAll();
        const result = await BookRepository.getAll({isbn: RegExp(searchTerm)});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

const getBookByIsbn = async (req = request, res = response) => {
    const { isbn } = req.params;

    try {
        const result = await BookRepository.getByIsbn(isbn);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

const createNewBook = async (req = request, res = response) => {
    const { isbn, title, author, year, genre, publisher, synopsis, cover } = req.body;
    const bookData = { isbn, title, author, year, genre, publisher, synopsis, cover };
    
    try {
        const savedBook = await BookRepository.create(bookData);
        res.status(201).json(
            savedBook
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear el nuevo elemento"
        });
    }
}

const updateBook = async (req = request, res = response) => {
    const { id } = req.params;
    const { isbn, title, author, year, genre, publisher, synopsis, cover } = req.body;
    const bookData = { isbn, title, author, year, genre, publisher, synopsis, cover };

    try {
        const result = await BookRepository.updateByIsbn(id, bookData);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

const deleteBook = async (req = request, res = response) => {
    const { isbn } = req.params;

    try {
        const result = await BookRepository.deleteByIsbn(isbn);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

module.exports = {
    getAllBooks,
    getBookByIsbn,
    createNewBook,
    updateBook,
    deleteBook
}