const express = require('express');
const app = express();


const userRoutes = require('./public/routes/users');
app.use(express.json()); // Parse JSON data


app.use('/users', require(userRoutes));       //use the userRoutes for any routes starting with '/users'

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});