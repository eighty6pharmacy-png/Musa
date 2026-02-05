const express = require ('express');
const app = express();

const hostname = "127.0.01";
const port = 3000;

// app.get('/',(req, res) => {
//     res.send("Welcome to express");

// });
// app.get('/', (req, res) => {
//     res.send('GET request to the homepage');
// }); 

// app.post('/', (req, res) => {
//     res.send('Post Request');
// }); 

app.get('/about', (req, res) => {
    res.send('about page');
}); 

app.get('/search', (req, res) => {
    res.send(`User: ${req.query.userId}, 
             Book ID: ${req.query.bookId || 'none'}`);
}); 

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(`User ID: ${req.params.userId}, 
             Book ID: ${req.params.bookId}`);
}); 

app.use((req, res) => {
    res.status(404).send('404 page not found');
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

