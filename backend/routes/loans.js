const { Router } = require('express');
const { getAllLoans, getLoansByUser, createNewLoan } = require('../controllers/loans');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const router = Router();

router.get("/", [validateJWT, verifyAdminRole], getAllLoans);

router.get("/:username", [validateJWT], getLoansByUser);

router.post("/", [validateJWT], createNewLoan);

module.exports = router;