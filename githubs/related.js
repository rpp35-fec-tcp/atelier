const axios = require('axios');
const config = require('../config.js');

let getProduct = (callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios(options)
  .then(res => {
    console.log(res);
    callback(null, res);
  })
  .catch(err => callback(err, null))
}

module.exports.getProduct = getProduct;