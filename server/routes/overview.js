const router = require('express').Router();
const axios = require('axios');
const token = require('../../config.js');

const getSpecificProduct = (productId) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
    headers: { Authorization: token.TOKEN },
  };
  return axios(options).then((response) => {
    return response.data;
  });
};

const getProductStyles = (productId) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
    headers: { Authorization: token.TOKEN },
  };
  return axios(options).then((response) => {
    return response.data;
  });
};

const getProductReviews = (productId) => {
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`,
    headers: { Authorization: token.TOKEN },
  };
  return axios(options).then((response) => {
    return response.data;
  });
};

router.get('/styleInfo', async (req, res) => {
  let id = req.query.id;
  var data = await productApi.getProductStyles(id);
  res.send(data);
});

router.get('/reviewInfo', async (req, res) => {
  let id = req.query.id;
  var data = await productApi.getProductReviews(id);
  res.send(data);
});

module.exports = router;
