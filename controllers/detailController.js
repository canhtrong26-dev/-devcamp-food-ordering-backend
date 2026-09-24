const Detail = require('../models/Detail');

// GET all details
exports.getAll = async (req, res) => {
  try {
    const details = await Detail.findAll();
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET detail by ID
exports.getById = async (req, res) => {
  try {
    const detail = await Detail.findByPk(req.params.id);
    if (!detail) return res.status(404).json({ error: 'Not found' });
    res.json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new detail
exports.create = async (req, res) => {
  try {
    const { orderId, foodId, quantity } = req.body;
    const detail = await Detail.create({ orderId, foodId, quantity });
    res.status(201).json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE detail
exports.update = async (req, res) => {
  try {
    const detail = await Detail.findByPk(req.params.id);
    if (!detail) return res.status(404).json({ error: 'Not found' });
    
    await detail.update(req.body);
    res.json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE detail
exports.delete = async (req, res) => {
  try {
    const detail = await Detail.findByPk(req.params.id);
    if (!detail) return res.status(404).json({ error: 'Not found' });
    
    await detail.destroy();
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};