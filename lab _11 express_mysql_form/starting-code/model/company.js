const db = require("../config/database");
const { DataTypes } = require('sequelize');

const Company = db.sequelize.define('Company', {
  id: { type: DataTypes.INTEGER, allowNull: false,primaryKey:true 
  },
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  capital: { type: DataTypes.BIGINT },
  owner: { type: DataTypes.STRING }
});

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database Synchronized with model...");
  });

module.exports = { Company };