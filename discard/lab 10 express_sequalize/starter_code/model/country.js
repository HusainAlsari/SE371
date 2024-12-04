const db = require("../config/database");
const { DataTypes } = require('sequelize');

// Define the Country model
const Country = db.sequelize.define('Country', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        unique:true
    },
    phone_code:{
        type: DataTypes.STRING,
        unique:true
    }
});

db.sequelize.sync({ alter: true });

module.exports = { Country };