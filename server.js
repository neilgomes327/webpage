const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 3000; 



// Define a GET route for the homepage ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT , () => {
    console.log('server live on port ${PORT}');
});





