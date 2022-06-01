const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const axios = require('axios');
const APIurl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../config.js');

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

app.post('/interactions', (req, res) => {
  //send an axios request to the interactions API
  let data = req.body;
  console.log(data);
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    data: {
      element: data.element,
      widget: data.widget,
      time: data.time
    }
  };

  axios.post(`${APIurl}/interactions`, options)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log(err.response.data);
      res.sendStatus(422);
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
