const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Detail = sequelize.define('fo_details', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'fo_orders',
      key: 'id'
    }
  },
  foodId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'fo_foods',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  tableName: 'fo_details'
});

module.exports = Detail;