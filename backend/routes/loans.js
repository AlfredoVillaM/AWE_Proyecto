const { Router } = require('express');
const { getAllLoans, getLoansByUser, createNewLoan } = require('../controllers/loans');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const router = Router();

router.get("/", getAllLoans);

router.get("/:username", getLoansByUser);

router.post("/", createNewLoan);

module.exports = router;