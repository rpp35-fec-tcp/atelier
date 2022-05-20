const axios = require('axios');
const express = require('express');
const { TOKEN: AUTH_TOKEN } = require('../../config.js');

const instance = axios.create();
const CAMPUS = 'hr-rpp';
instance.defaults.baseURL = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}`;
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const router = express.Router();

router.get('/', (req, res) => {
  instance
    .get('/reviews', { params: { ...req.query } })
    .then(({ data }) => {
      res.send(data.results);
    })
    .catch(({ response }) => {
      res.status(response.status).send(response.statusText);
    });
});

module.exports = router;
