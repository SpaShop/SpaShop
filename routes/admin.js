const express = require('express');
const router = express.Router();


const admin_Controller = require('../controllers/admin')
const manage_emp_Controller = require('../controllers/admin_controller/manage_emp');
const manage_role_Controller = require('../controllers/admin_controller/manage_role');

router.get('/', admin_Controller.getAdmin);

router.get('/manage_emp', manage_emp_Controller.Manage_emp);
router.get('/manage_role', manage_role_Controller.Manage_role);


module.exports = router;
