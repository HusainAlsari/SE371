const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define a route to render an EJS page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to our website!' });
});

app.get('/about',(req,res)=>{
  res.render('about.ejs')
}) 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
