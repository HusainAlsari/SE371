const express = require('express');

const db = require("./config/database.js");
const PORT=process.env.PORT
require('dotenv').config();

const Company = require("./model/company").Company;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs");

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

// Load all companies from database then render index template with all companies ////

app.get('/', async (request, response) => {
  try {
      const companies = await Company.findAll();
      response.render('index', { companies });
  } catch (error) {
      console.error('Error fetching data:', error);
      response.status(500).send('Error fetching data');
  }
});




/// MODIFY THIS ROUTE to ACCEPT ARGUMENTS in the BODY of the HTTP REQUEST 
app.post('/v1/companies/', async (request, response) => {
  try {
      // Extract parameters from the request
      const { code, name, address, description, capital, owner } = request.body;

      // Create a new company record
      await Company.create({
          id: code,
          name: name,
          address: address,
          description: description,
          capital: capital,
          owner: owner
      });

      // Redirect the user to the home page
      response.redirect('/');
  } catch (error) {
      console.error('Error adding company:', error);
      response.status(500).send('Error adding company');
  }
});


// Start server, then connect to database
app.listen(PORT, async () => {
  await db.connectToDB();
  console.log(`Server is listening at http://localhost:${PORT}`);
});

