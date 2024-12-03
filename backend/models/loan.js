const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
    username: String,
    isbn: String,
    title: String,
    startDate: Date,
    dueDate: Date
})

module.exports = mongoose.model("Loan", loanSchema);