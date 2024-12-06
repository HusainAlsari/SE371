require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override');
const db = require("./config/database");
const { PatientRegistrationTable } = require("./model/tables");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static("public")); // Serve static files
app.set("view engine", "ejs"); // Set EJS as the view engine

// EJS Pages Rendering
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

// Handle 404 for invalid routes
app.use((req, res) => {
  res.status(404).render("404");
});

// Routes
app.get('/', async (req, res) => {
  try {
    const patients = await PatientRegistrationTable.findAll();
    res.render('index', { patients });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

// Route for adding a new patient
app.post('/v1/patients/', async (req, res) => {
  try {
    const { Pid, first_name, last_name, email, phone_number, department } = req.body;

    await PatientRegistrationTable.create({
      Pid: Pid,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      department: department
    });

    res.redirect('/');
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).send('Error adding patient');
  }
});

// Route to delete a patient by ID (with DELETE method)
app.delete('/v1/patients/del/:Pid', async (req, res) => {
  try {
    const { Pid } = req.params;

    const patient = await PatientRegistrationTable.findByPk(Pid);
    if (patient) {
      await patient.destroy();
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).send('Error deleting patient');
  }
});

// Route to update patient information
app.post('/v1/patients/update', async (req, res) => {
  try {
    const { Pid, first_name, last_name, email, phone_number, department } = req.body;

    const patient = await PatientRegistrationTable.findByPk(Pid);
    if (patient) {
      await patient.update({
        first_name,
        last_name,
        email,
        phone_number,
        department
      });
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).send('Error updating patient');
  }
});

app.post('/v1/technical_issues', async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, issue_description } = req.body;

    await Technical_issue.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      issue_description: issue_description
    });

    res.redirect('/');
  } catch (error) {
    console.error('Error submitting technical issue:', error);
    res.status(500).send('Error submitting technical issue');
  }
});

// Start server and connect to database
app.listen(process.env.PORT, async () => {
  await db.connectToDB();
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
