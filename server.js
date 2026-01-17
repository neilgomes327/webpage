const express = require('express');
const app = express(); 
const path = require('path');

const PORT = process.env.PORT || 3000; 

// Serve everything inside /public (css, js, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT , () => {
    console.log(`server live on port ${PORT}`);
});





