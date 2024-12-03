const { Router } = require('express');
const { getAllBooks, createNewBook, getBookByIsbn, updateBook, deleteBook } = require('../controllers/books');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const router = Router();

router.get("/", getAllBooks);

router.get("/:isbn", getBookByIsbn);

router.post("/", [validateJWT, verifyAdminRole], createNewBook);

router.put("/:id", [validateJWT, verifyAdminRole], updateBook);

router.delete("/:isbn", [validateJWT, verifyAdminRole], deleteBook);

module.exports = router;