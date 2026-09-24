const Order = require('../models/Order');

// GET all orders
exports.getAll = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET order by ID
exports.getById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new order
exports.create = async (req, res) => {
  try {
    const { voucherCode, lastName, email, address, phone, methodPayment, voucherId } = req.body;
    const order = await Order.create({ 
      voucherCode, 
      lastName, 
      email, 
      address, 
      phone, 
      methodPayment, 
      voucherId 
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE order
exports.update = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Not found' });
    
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE order
exports.delete = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Not found' });
    
    await order.destroy();
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};