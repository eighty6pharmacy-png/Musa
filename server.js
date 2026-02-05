const express = require ('express');
const app = express();

const hostname = "127.0.01";
const port = 3000;

// app.get('/',(req, res) => {
//     res.send("Welcome to express");

// });
app.get('/', (req, res) => {
    res.send('GET request to the homepage');
}); 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

