const router = require('express').Router();
const axios =  require('axios');
const APIurl = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rpp';
const config = require('/Users/josh/HRWork/Senior/atelier/config.js');

router.get('/', (req, res) => {
  let product_id = req.params;
  console.log(product_id);
  options = {url: `${APIurl}/qa/quesitons`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
    },
    params: {product_id: product_id}
}
  axios(options)
    .then( (APIres) => {
      res.send(APIres.data);
    })
    .catch( (err) => {
      console.log('error getting question data in router', err);
    })
})

module.exports = router;
