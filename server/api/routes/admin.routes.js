const router = require('express').Router();
const AdminsController = require('../controllers/AdminsController');

router.get('/', AdminsController.fetch_data);

module.exports = router;
