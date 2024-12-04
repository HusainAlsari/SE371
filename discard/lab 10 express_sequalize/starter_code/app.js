require("dotenv").config();
const express = require('express');

const db = require("./config/database");

// import the Country model
const Country = require('./model/country').Country;

const app = express();
app.use(express.json()); 


// Select all
app.get('/api/countries/v1/', async (req, res) => {
const countries = await Country.findAll();
res.status(200).json({countries: countries});
});

// Create
app.post('/api/countries/v1/', async (req, res) => {
const { id, name, phone_code } = req.body;
const newCountry = Country.build({id, name, phone_code});
try {
  await newCountry.save();
  res.status(201).json(newCountry);
} catch (error){
  res.json(error);
}

});

// Start server, then connect to database
app.listen(process.env.PORT, async () => {
  console.log(`Server is listening at http://localhost/${process.env.PORT}`);
  db.connectToDB()
  .then( result => {
    console.log(`Connection to database succeeded at ${process.env.DB_HOST}:${process.env.DB_PORT}`);
  })
  .catch(err => {
    console.log(err);
  })
});