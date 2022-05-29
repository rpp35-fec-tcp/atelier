const axios = require('axios');
const config = require('../config');

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = `${config.TOKEN}`;

const getRelatedProducts = (id) => axios.get(`/products/${id}/related`);

const getOneProduct = (id) => axios.get(`/products/${id}`);

const getOneProductStyle = (id) => axios.get(`/products/${id}/styles`);

const getReviews = (id) => axios.get('/reviews/meta', { params: { product_id: id } });

const postInteractions = (data) => axios.post('/interactions', data);

module.exports.getOneProduct = getOneProduct;
module.exports.getRelatedProducts = getRelatedProducts;
module.exports.getOneProductStyle = getOneProductStyle;
module.exports.getReviews = getReviews;
module.exports.postInteractions = postInteractions;

// let getProduct = () => {
//   // TODO - Use the axios module to request repos for a specific
//   // user from the github API
//   // The options object has been provided to help you out,
//   // but you'll have to fill in the URL
//   let getPro = {
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`,
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': `${config.TOKEN}`
//     },
//     params: {
//       page: 1,
//       count: 5
//     },
//   };
//   return axios(getPro);
// }
