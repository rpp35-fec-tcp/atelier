const express = require('express');
const app = express();


const port = 3000;

//Serve static files
app.use(express.static(__dirname + '/../client/dist'));

// Chloe, I think this is where we need the router?? or does it go before, the "express.static" statement?


//listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




