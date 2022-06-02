const axios = require('axios');
const config = require('../config');

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common.Authorization = `${config.TOKEN}`;

// helper function to choose only required data
const calculateRating = (ratings) => {
  const keys = Object.keys(ratings);
  let sum = 0;
  let count = 0;
  if (keys.length > 0) {
    for (const key of keys) {
      sum += Number(key) * Number(ratings[key]);
      count += Number(ratings[key]);
    }
    return sum / count;
  }
  return -1;
};
const filterData = (data) => {
  const result = data[0];
  const defaultItem = data[1].results.filter((style) => style['default?']);
  result.defaultItem = defaultItem.length === 0
    ? data[1].results[0]
    : defaultItem[0];
  result.reviewRating = calculateRating(data[2].ratings);
  return result;
};

const getRelatedProducts = (id) => axios.get(`/products/${id}/related`);

const getOneProduct = (id) => axios.get(`/products/${id}`).then((results) => results.data);

const getOneProductStyle = (id) => axios.get(`/products/${id}/styles`).then((results) => results.data);

const getReviews = (id) => axios.get('/reviews/meta', { params: { product_id: id } }).then((results) => results.data);

const getAllInfo = (id) => Promise.all([getOneProduct(id), getOneProductStyle(id), getReviews(id)])
  .then((data) => filterData(data));

const postInteractions = (data) => axios.post('/interactions', data);

module.exports.getOneProduct = getOneProduct;
module.exports.getRelatedProducts = getRelatedProducts;
module.exports.postInteractions = postInteractions;
module.exports.getAllInfo = getAllInfo;

