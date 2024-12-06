const db = require("../config/database");
const { DataTypes } = require('sequelize');

const PatientRegistrationTable = db.sequelize.define('PatientRegistrationTable', {
    Pid:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    first_name:{
        type: DataTypes.STRING,
    },
    last_name:{
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
    department:{
        type: DataTypes.STRING,
    }
});

db.sequelize.sync({ alter: true });

module.exports = { PatientRegistrationTable };
