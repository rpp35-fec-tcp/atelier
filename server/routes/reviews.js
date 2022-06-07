const axios = require('axios');
const express = require('express');
const { TOKEN: AUTH_TOKEN } = require('../../config');

const router = express.Router();
const CAMPUS = 'hr-rpp';
const instance = axios.create({
  baseURL: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/reviews`,
  timeout: 4000,
  headers: { Authorization: AUTH_TOKEN },
});

router.get('/', async (req, res) => {
  try {
    const { data } = await instance.get(
      '/',
      { params: { ...req.query } },
    );
    res.send(data.results);
  } catch ({ response }) {
    res.status(response.status).send(response.statusText);
  }
});

router.get('/meta', async (req, res) => {
  try {
    const { data } = await instance.get(
      '/meta',
      { params: { ...req.query } },
    );
    res.send(data);
  } catch ({ response }) {
    res.status(response.status).send(response.statusText);
  }
});

module.exports = router;
