const { Router } = require('express');
const { getAllBooks, createNewBook, getBookByIsbn, updateBook, deleteBook } = require('../controllers/books');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const router = Router();

router.get("/", getAllBooks);

router.get("/:isbn", getBookByIsbn);

router.post("/", createNewBook);

router.put("/:id", updateBook);

router.delete("/:isbn", deleteBook);

module.exports = router;