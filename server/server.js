const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

const overviewRoute = require('./routes/overview');
const relatedRoute = require('./routes/related');
const questionRoute = require('./routes/question');
const reviews = require('./routes/reviews');

app.use('/overview', overviewRoute);
app.use('/related', relatedRoute);
app.use('/question', questionRoute);
app.use('/reviews', reviews);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
