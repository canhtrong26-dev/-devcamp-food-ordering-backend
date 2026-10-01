const express = require('express');
const sequelize = require('./config/database');
const voucherRoutes = require('./routes/vouchers');
const orderRoutes = require('./routes/orders');
const detailRoutes = require('./routes/details');
const foodRoutes = require('./routes/foods');

const Order = require('./models/Order');
const Voucher = require('./models/Voucher');
const Detail = require('./models/Detail');
const Food = require('./models/Food');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Order.belongsTo(Voucher, { foreignKey: 'voucherId' });
Voucher.hasMany(Order, { foreignKey: 'voucherId' });
Detail.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(Detail, { foreignKey: 'orderId' });
Detail.belongsTo(Food, { foreignKey: 'foodId' });
Food.hasMany(Detail, { foreignKey: 'foodId' });

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.log('Sync error:', err));

app.use('/api/vouchers', voucherRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/details', detailRoutes);
app.use('/api/foods', foodRoutes); 

app.get('/', (req, res) => {
  res.json({ message: 'Server đã sẵn sàng khởi động' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});