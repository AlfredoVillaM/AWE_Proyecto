const { Router } = require('express');
const { getCommentsByIsbn, createNewComment } = require('../controllers/comments');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const router = Router();

router.get("/:isbn", getCommentsByIsbn);

router.post("/", createNewComment);

module.exports = router;