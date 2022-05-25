const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json())

const overviewRoute = require('./routes/overview.js');
const relatedRoute = require('./routes/related.js');
const questionRoute = require('./routes/question.js');
const reviews = require('./routes/reviews');

app.use('/overview', overviewRoute);
app.use('/related', compression(), relatedRoute);
app.use('/question', questionRoute);
app.use('/reviews', reviews);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
