const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json())

const overviewRoute = require('./routes/overview.js');
const relatedRoute = require('./routes/related.js');
const questionRoute = require('./routes/question.js');
const reviews = require('./routes/reviews.js');

app.use('/overview', overviewRoute);
app.use('/related', relatedRoute);
app.use('/question', questionRoute);
app.use('/reviews', reviews);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
