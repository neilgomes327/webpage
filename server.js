const express = require('express');
const app = express(); 

const port = 3000;



// Define a GET route for the homepage ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port , () => {
    console.log("server live");
});





