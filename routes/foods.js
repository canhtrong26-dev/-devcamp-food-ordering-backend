const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/', foodController.getAll);
router.get('/:id', foodController.getById);
router.post('/', foodController.create);
router.put('/:id', foodController.update);
router.delete('/:id', foodController.delete);

module.exports = router;