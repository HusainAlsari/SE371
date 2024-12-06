require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const db = require("./config/database.js");
const Company = require("./model/company").Company;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable method override for DELETE and PUT
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set("view engine", "ejs");

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

// Load all companies from the database then render the index template
app.get('/', async (request, response) => {
  try {
    const companies = await Company.findAll();
    response.render('index', { companies });
  } catch (error) {
    console.error('Error fetching data:', error);
    response.status(500).send('Error fetching data');
  }
});

// Route for adding a new company
app.post('/v1/companies/', async (request, response) => {
  try {
    const { code, name, address, description, capital, owner } = request.body;

    await Company.create({
      id: code,
      name: name,
      address: address,
      description: description,
      capital: capital,
      owner: owner
    });

    response.redirect('/');
  } catch (error) {
    console.error('Error adding company:', error);
    response.status(500).send('Error adding company');
  }
});

// Route to delete a company by ID (with DELETE method)
app.delete('/v1/companies/del/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const company = await Company.findByPk(id);
    if (company) {
      await company.destroy();
    }

    const companies = await Company.findAll();
    response.redirect('/');
  } catch (error) {
    console.error('Error deleting company:', error);
    response.status(500).send('Error deleting company');
  }
});

// Route to update company information
app.post('/v1/companies/update', async (request, response) => {
  try {
    const { id, name, address, description, capital, owner } = request.body;

    const company = await Company.findByPk(id);
    if (company) {
      await company.update({ name, address, description, capital, owner });
    }

    response.redirect('/');
  } catch (error) {
    console.error('Error updating company:', error);
    response.status(500).send('Error updating company');
  }
});

// Start server and connect to database
app.listen(process.env.PORT, async () => {
  await db.connectToDB();
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
