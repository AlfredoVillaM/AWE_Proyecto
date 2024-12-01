const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
    isbn: String,
    username: String,
    startDate: Date,
    dueDate: Date
})

module.exports = mongoose.model("Loan", loanSchema);