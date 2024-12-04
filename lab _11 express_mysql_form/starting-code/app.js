const express = require('express');

const db = require("./config/database.js");

require('dotenv').config();

const Company = require("./model/company");

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs");

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

// Load all companies from database then render index template with all companies ////
app.get('/', (request, response) => {


});


/// MODIFY THIS ROUTE to ACCEPT ARGUMENTS in the BODY of the HTTP REQUEST 
app.post('/v1/companies/code/:code/name/:name/address/:address/description/:description/capital/:capital/owner/:owner',
 (request, response) => {

});


// Start server, then connect to database
app.listen(PORT, async () => {
  await db.connectToDB();
  console.log(`Server is listening at http://localhost:${PORT}`);
});

