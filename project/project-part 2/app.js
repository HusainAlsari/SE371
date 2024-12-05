// require("dotenv").config();
// const express = require('express');

// const db = require("./config/database");

// // import the Country model
// const PRT = require('./model/tables').PRT
// const TI = require('./model/Technical_issue').TI


// //const app = express();
// app.use(express.json()); 


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




///chat gpt reorgniazed this code
require("dotenv").config();
const express = require("express");
const db = require("./config/database");
const { PRT } = require("./model/tables");
const { TI } = require("./model/Technical_issue");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public")); // Serve static files
app.set("view engine", "ejs"); // Set EJS as the view engine

// Routes
// API to fetch all countries
app.get("/api/countries/v1/", async (req, res) => {
  try {
    const countries = await PRT.findAll();
    res.status(200).json({ countries });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API to create a new country
app.post("/api/countries/v1/", async (req, res) => {
  const { id, name, phone_code } = req.body;

  try {
    const newCountry = await PRT.create({ id, name, phone_code });
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Webpages
app.get("/", (req, res) => {
  res.render("main", {
    data1: "Welcome to the Homepage",
    data2: "Enjoy your stay!",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    data1: "About Us",
    data2: "We are committed to excellence.",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    data1: "Register Here",
    data2: "Join our community.",
  });
});

app.get("/helpPage", (req, res) => {
  res.render("helpPage", {
    data1: "Help Page",
    data2: "We're here to assist you.",
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).render("404");
});

// Start server and connect to the database
app.listen(process.env.PORT, async () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);

  try {
    await db.connectToDB();
    console.log(
      `Database connected successfully at ${process.env.DB_HOST}:${process.env.DB_PORT}`
    );
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
});
