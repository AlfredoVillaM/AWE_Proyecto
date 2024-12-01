const Loan = require("../models/loan");

class LoanRepository {
    static async getAll() {
        return await Loan.find();
    }

    static async getByUser(username) {
        return await Loan.find({username: username});
    }

    static async create(loanData) {
        const loan = new Loan(loanData);
        return await loan.save()
    }
}

module.exports = { LoanRepository };