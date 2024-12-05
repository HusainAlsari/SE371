require("dotenv").config();
const express = require('express');

const db = require("./config/database");

// import the Country model
const PRT = require('./model/tables').PRT
const TI = require('./model/Technical_issue').TI


const app = express();
app.use(express.json()); 


// // Select all
// app.get('/api/countries/v1/', async (request, response) => {
//   const countries=await Country.findAll();
//   response.status(200).json({countries:countries});
// });

// // Create
// app.post('/api/countries/v1/', async (request, response) => {
//   const {id,name,phone_code}=request.body;
//   const newCountry=Country.build({id,name,phone_code});

//   try{
//     await newCountry.save();
//     response.status(201).json(newCountry);
//   } catch(error){
//     response.json(error);
//   }
// })

// // Start server, then connect to database
// app.listen(process.env.PORT, async () => {
//   console.log(`Server is listening at http://localhost/${process.env.PORT}`);
//   db.connectToDB()
//   .then( result => {
//     console.log(`Connection to database succeeded at ${process.env.DB_HOST}:${process.env.DB_PORT}`);
//   })
//   .catch(err => {
//     console.log(err);
//   })
// });
// const express = require('express');
// require('dotenv').config();

// // Import data object

// // express app creation
// const app = express();

// // Add the public folder as a static files folder (so that files are accessible to client requests)
// app.use(express.static('public')); 

// // register view engine to express app
// app.set('view engine','ejs');

// // Add routes handlers below

// // Corrected routes handlers
// app.get('/', (req, res) => {
//   const value1 = "Welcome to the Homepage";
//   const value2 = "Enjoy your stay!";
//   res.render('main', { data1: value1, data2: value2 });
// });

// app.get('/about', (req, res) => {
//   const value1 = "About Us";
//   const value2 = "We are committed to excellence.";
//   res.render('about', { data1: value1, data2: value2 });
// });

// app.get('/register', (req, res) => {
//   const value1 = "Register Here";
//   const value2 = "Join our community.";
//   res.render('register', { data1: value1, data2: value2 });
// });

// app.get('/helpPage', (req, res) => {
//   const value1 = "Help Page";
//   const value2 = "We're here to assist you.";
//   res.render('helpPage', { data1: value1, data2: value2 });
// });


// // Finally if no route corresponds to request render 404 page
// app.use((req,res)=>{
//   res.status(404).render('404')
// })


// // listen for requests
// app.listen(process.env.PORT, () => { 
//   console.log(`Listening on port ${process.env.PORT}...`) 
// });
