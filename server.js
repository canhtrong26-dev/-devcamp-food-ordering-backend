const express = require('express');
const sequelize = require('./config/database');
const voucherRoutes = require('./routes/vouchers');  // ← THÊM DÒNG NÀY

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.log('Sync error:', err));

// Routes
app.use('/api/vouchers', voucherRoutes);  

// Route test
app.get('/', (req, res) => {
  res.json({ message: 'Server đã sẵn sàng khởi động' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});