const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use((req, res, next) => {
    next();
});

// allow form data
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
    console.log("User visited a page");
    res.send("Welcome to my first server");
});

// Profile Page
app.get("/profile", (req, res) => {
    console.log("User visited a page");
    res.send("My name is Jan Ranier Musa");
});

// Course Page
app.get("/course", (req, res) => {
    console.log("User visited a page");
    res.send("BSIT");
});

// Greet
app.get("/greet", (req, res) => {
    if (req.query.msg) {
        res.send(`${req.query.msg}<br>Welcome`);
    } else {
        res.sendFile(path.join(__dirname, "test.html"));
    }
});

// Start server
app.listen(3000, () => {
    console.log(
        "Server is running on http://localhost:3000");
});