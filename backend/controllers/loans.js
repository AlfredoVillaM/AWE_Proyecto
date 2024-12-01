const { response, request } = require('express');
const { LoanRepository } = require('../repositories/loan');

const getAllLoans = async (req = request, res = response) => {
    try {
        const result = await LoanRepository.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

const getBookByUser = async (req = request, res = response) => {
    const { username } = req.params;

    try {
        const result = await LoanRepository.getByUser(username);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener los datos"
        });
    }
}

const createNewLoan = async (req = request, res = response) => {
    const { username, isbn, title, startDate, dueDate } = req.body;
    const loanData = { username, isbn, title, startDate, dueDate };
    
    try {
        const savedLoan = await LoanRepository.create(loanData);
        res.status(201).json(
            savedLoan
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear el nuevo elemento"
        });
    }
}

module.exports = {
    getAllLoans,
    getBookByUser,
    createNewLoan
}