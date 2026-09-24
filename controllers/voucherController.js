const Voucher = require('../models/Voucher');

// GET all vouchers
exports.getAll = async (req, res) => {
  try {
    const vouchers = await Voucher.findAll();
    res.json(vouchers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET voucher by ID
exports.getById = async (req, res) => {
  try {
    const voucher = await Voucher.findByPk(req.params.id);
    if (!voucher) return res.status(404).json({ error: 'Not found' });
    res.json(voucher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new voucher
exports.create = async (req, res) => {
  try {
    const { code, discount } = req.body;
    const voucher = await Voucher.create({ code, discount });
    res.status(201).json(voucher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE voucher
exports.update = async (req, res) => {
  try {
    const voucher = await Voucher.findByPk(req.params.id);
    if (!voucher) return res.status(404).json({ error: 'Not found' });
    
    await voucher.update(req.body);
    res.json(voucher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE voucher
exports.delete = async (req, res) => {
  try {
    const voucher = await Voucher.findByPk(req.params.id);
    if (!voucher) return res.status(404).json({ error: 'Not found' });
    
    await voucher.destroy();
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};