const router = require('express').Router();
const IdxdataController = require('../controllers/IdxdataController');

router.get('/', IdxdataController.fetch_data);

module.exports = router;
