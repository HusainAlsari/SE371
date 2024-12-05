require("dotenv").config();
const express = require("express");
const db = require("./config/database");
const  PRT  = require("./model/tables").PRT;
const  TI  = require("./model/Technical_issue").TI;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware
app.use(express.json());
app.use(express.static("public")); // Serve static files
app.set("view engine", "ejs"); // Set EJS as the view engine

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

// EJS Pages Rendering
app.get("/main", (req, res) => {
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
// API to fetch all patients 
app.get("/", async (request, response) => {
  try {
    const patients = await PRT.findAll();  // Change to correct model or query if necessary
    response.render("index", { patients });  // Adjust to use proper view template
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Error fetching data");
  }
});

// API to create a new country (could be changed to 'patients' if relevant)
app.post("/api/countries/v1/", async (req, res) => {
  const { id, name, phone_code } = req.body;

  try {
    const newCountry = await PRT.create({ id, name, phone_code });
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});




