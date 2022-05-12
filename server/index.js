const express = require('express');
const app = express();

const port = 3000;

//Serve static files
app.use(express.static(__dirname + '/../client/dist'));

const overviewRoute = require('./routes/overview.js');
const questionRoute = require('./routes/question.js');
const ratingRoute = require('./routes/rating.js');
const relatedRoute = require('./routes/related.js');

app.use('/overview', overviewRoute);
app.use('/question', questionRoute);
app.use('/rating', ratingRoute);
app.use('/related', relatedRoute);




//listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




