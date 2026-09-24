const Food = require('../models/Food');

// GET all foods
exports.getAll = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET food by ID
exports.getById = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (!food) return res.status(404).json({ error: 'Not found' });
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new food
exports.create = async (req, res) => {
  try {
    const { name, imageUrl, price, rating, time } = req.body;
    const food = await Food.create({ name, imageUrl, price, rating, time });
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE food
exports.update = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (!food) return res.status(404).json({ error: 'Not found' });
    
    await food.update(req.body);
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE food
exports.delete = async (req, res) => {
  try {
    const food = await Food.findByPk(req.params.id);
    if (!food) return res.status(404).json({ error: 'Not found' });
    
    await food.destroy();
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};