const express = require('express');
const voucherController = require('../controllers/voucherController');

const router = express.Router();

router.get('/', voucherController.getAll);
router.get('/:id', voucherController.getById);
router.post('/', voucherController.create);
router.put('/:id', voucherController.update);
router.delete('/:id', voucherController.delete);

module.exports = router;