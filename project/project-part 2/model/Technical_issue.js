const db = require("../config/database");
const { DataTypes } = require('sequelize');

//Technical issue form Table
const technical_issue = db.sequelize.define('technical_issue', {
    issue_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true, // Auto-generate the issue id
        primaryKey: true
    },
    first_name:{
        type: DataTypes.STRING,
    },
    first_name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    phone_number:{
        type: DataTypes.STRING,
        unique:true
    },
    issue_discription:{
        type: DataTypes.STRING,
    }
});

db.sequelize.sync({ alter: true });

module.exports = {technical_issue };