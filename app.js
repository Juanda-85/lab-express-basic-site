// Import required modules
const express = require('express');

// Create the Express app
const app = express();

// Everything inside of public available

app.use(express.static('public'));

// Set routes
app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
});



// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});