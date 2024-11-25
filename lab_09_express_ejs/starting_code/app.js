const express = require('express');
require('dotenv').config();

// Import data object

// express app creation
const app = express();

// Add the public folder as a static files folder (so that files are accessible to client requests)
app.use(express.static('public')); 

// register view engine to express app
app.set('view engine','ejs');

// Add routes handlers below

  app.get('/', (req, res) => {
    response.render('index', {data1: value1, data2: value2});
  })

  app.get('/about', (req, res) => {
    response.render('about', {data1: value1, data2: value2});
  })



// Finally if no route corresponds to request render 404 page
app.use((req,res)=>{
  res.status(404).render('404')
})


// listen for requests
app.listen(process.env.PORT, () => { 
  console.log(`Listening on port ${process.env.PORT}...`) 
});
