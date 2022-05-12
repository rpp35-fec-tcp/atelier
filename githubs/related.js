const axios = require('axios');
const config = require('../config.js');

let getProduct = () => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let getPro = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    },
    params: {
      page: 1,
      count: 5
    },
  };
  return axios(getPro);
    // .then((res)=>console.log(res.data))
    // .catch((err) =>console.log(err));
  // .then(res => {
  //   console.log(res);
  //   callback(null, res);
  // })
  // .catch(err => callback(err, null))
}

module.exports.getProduct = getProduct;