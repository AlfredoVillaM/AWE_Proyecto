const Book = require("../models/book");

class BookRepository {
    static async getAll(query) {
        return await Book.find(query);
    }
    
    static async getByIsbn(isbn) {
        return await Book.findOne({isbn: isbn});
    }

    static async create(bookData) {
        const book = new Book(bookData);
        return await book.save()
    }

    static async updateByIsbn(isbn, updateData) {
        return await Book.updateOne({isbn: isbn}, updateData);
    }

    static async deleteByIsbn(isbn) {
        return await Book.deleteOne({isbn: isbn});
    }
}

module.exports = { BookRepository };