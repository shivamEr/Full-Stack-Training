const router = require('express').Router();

const {getAllUsers, registerUser, loginUser} = require('../controllers/userController')

router.get('/all', getAllUsers);

// POST /register
router.post('/register',registerUser);

// POST /login
router.post('/login', loginUser);

module.exports = router;
