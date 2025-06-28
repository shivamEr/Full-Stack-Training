
const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/all', userController.getAllUsrs);

router.post('/create',userController.createUser);

module.exports = router;