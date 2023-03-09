const express = require('express');
const router = express.Router();


const admin_Controller = require('../controllers/admin')
const manage_emp_Controller = require('../controllers/admin_controller/manage_emp');
const manage_role_Controller = require('../controllers/admin_controller/manage_role');

router.get('/', admin_Controller.getAdmin);

router.get('/manage_emp', manage_emp_Controller.Manage_emp);
router.post('/manage_emp/:action', manage_emp_Controller.setEmployee);

router.get('/manage_role', manage_role_Controller.Manage_role);

// --------------- API ---------------
// router.post('/manage_emp/is_duplicate_name', manage_emp_Controller.is_duplicate_name);
router.get('/manage_emp/is_duplicate_name', manage_emp_Controller.is_duplicate_name);
router.get('/manage_emp/is_duplicate_name_id', manage_emp_Controller.is_duplicate_name_id);

module.exports = router;
