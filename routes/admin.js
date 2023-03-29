const express = require('express');
const router = express.Router();


const admin_controller = require('../controllers/admin')
const manage_emp_controller = require('../controllers/admin_controller/manage_emp');
const manage_role_controller = require('../controllers/admin_controller/manage_privileges');

const product_controller = require('../controllers/privileges_controller/product');

router.get('/', admin_controller.getAdmin);

// ---------------  manage-emp ---------------
router.get('/manage_emp', manage_emp_controller.Manage_emp);
router.post('/manage_emp/:action', manage_emp_controller.setEmployee);
// --------------- API manage-emp ---------------
router.get('/manage_emp/is_duplicate_name', manage_emp_controller.is_duplicate_name);
router.get('/manage_emp/is_duplicate_name_id', manage_emp_controller.is_duplicate_name_id);


// ---------------  manage-privileges ---------------
router.get('/manage_privileges', manage_role_controller.Manage_privileges);
router.post('/manage_privileges/update', manage_role_controller.Manage_privileges_update);



// ---------------  manage-product ---------------
router.get('/manage_product',product_controller.product);
router.post('/manage_product/:action', product_controller.set_product);

router.get('/product_item',product_controller.product_item);
router.post('/product_item/:action', product_controller.set_product_item);
router.post('/product_item/cost/:action', product_controller.set_item_cost);

// --------------- validate manage-product ---------------
router.get('/manage_product/is_duplicate_name', product_controller.is_duplicate_name);
router.get('/manage_product/is_duplicate_name_id', product_controller.is_duplicate_name_id);

router.get('/product_item/is_duplicate_name_product_item', product_controller.is_duplicate_name_product_item);
router.get('/product_item/is_duplicate_name_id_product_item', product_controller.is_duplicate_name_id_product_item);




module.exports = router;
