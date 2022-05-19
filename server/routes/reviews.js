const express = require('express');
const router = express.Router();
const { getReviews } = require('../../helpers/reviews.js');

router.get('/', (req, res) => {
  getReviews()
    .then(({ data }) => {
      res.send(data.results);
    })
    .catch(({ response }) => {
      res.status(response.status).send(response.statusText);
    });
});

module.exports = router;
