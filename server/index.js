const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json())

const overviewRoute = require('./routes/overview.js');
const questionRoute = require('./routes/question.js');
const reviews = require('./routes/reviews.js');
const relatedRoute = require('./routes/related.js');

app.use('/overview', overviewRoute);
app.use('/question', questionRoute);
app.use('/reviews', reviews);
app.use('/related', relatedRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
