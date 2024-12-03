const db = require("../config/database");
const { DataTypes } = require('sequelize');

// Define the Country model
const PatientRegistrationTable = db.sequelize.define('PatientRegistrationTable', {
    Pid:{
        type: DataTypes.INTEGER,
        autoIncrement: true, // Auto-generate the Pid
        primaryKey: true
    },
    first_name:{
        type: DataTypes.STRING,
        unique:true
    },
    first_last:{
        type: DataTypes.STRING,
        unique:true
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    phone_number:{
        type: DataTypes.STRING,
        unique:true
    },
    deprtment:{
        type:DataTypes.STRING,
        unique:true
    }

});
//Technical issue form Table
const Technical_issue = db.sequelize.define('Technical_issue', {
    issue_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true, // Auto-generate the Pid
        primaryKey: true
    },
    first_name:{
        type: DataTypes.STRING,
        unique:true
    },
    first_last:{
        type: DataTypes.STRING,
        unique:true
    },
    phone_number:{
        type: DataTypes.STRING,
        unique:true
    },
    deprtment:{
        type:DataTypes.STRING,
        unique:true
    }
});

db.sequelize.sync({ alter: true });

module.exports = {PatientRegistrationTable, Technical_issue };