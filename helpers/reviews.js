const axios = require('axios');
const { TOKEN: AUTH_TOKEN } = require('../config.js');
const CAMPUS = 'hr-rpp';

const instance = axios.create();
instance.defaults.baseURL = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}`;
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const getReviews = (product_id = 71697, page, count, sort) => {
  return instance.get('/reviews', {
    params: {
      product_id,
      page,
      count,
      sort
    }
  });
};

module.exports = { getReviews };
