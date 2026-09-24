const express = require('express');
const sequelize = require('./config/database');
const voucherRoutes = require('./routes/vouchers');
const orderRoutes = require('./routes/orders');
const detailRoutes = require('./routes/details');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.log('Sync error:', err));

app.use('/api/vouchers', voucherRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/details', detailRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Server đã sẵn sàng khởi động' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});