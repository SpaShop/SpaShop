const express = require('express');
const router = express.Router();


const admin_Controller = require('../controllers/admin')
router.get('/', admin_Controller.getAdmin);

module.exports = router;
