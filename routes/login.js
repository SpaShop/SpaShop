
const express = require('express');

const loginController = require('../controllers/login')

const router = express.Router();


router.get('/', loginController.getLogin);
router.post('/vertify_login', loginController.vertify_login);
router.post('/vertify_ensure_password', loginController.vertify_ensure_password);

// router.get('/logout', loginController.logout);
// router.post('/', loginController.postLogin_valid);
module.exports = router;
