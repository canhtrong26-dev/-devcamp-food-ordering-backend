const express = require('express');
const detailController = require('../controllers/detailController');

const router = express.Router();

router.get('/', detailController.getAll);
router.get('/:id', detailController.getById);
router.post('/', detailController.create);
router.put('/:id', detailController.update);
router.delete('/:id', detailController.delete);

module.exports = router;