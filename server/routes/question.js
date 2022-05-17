const router = require('express').Router();
const axios = require('axios');
const APIurl = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rpp/qa/questions';
const config = require('/Users/josh/HRWork/Senior/atelier/config.js');

//question route//
router.get('/', (req, res) => {
  let product_id = req.query.product_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    params: {
      product_id: product_id,
      page: 1,
      count: 5
    }
  };

  axios.get(APIurl, options)
    .then((APIres) => {
      res.status(200).send(APIres.data);
    })
    .catch((err) => {
      console.log('error getting question data in router', err.response);
      res.end();
    })
});

//answer route//
router.get('/answers', (req, res) => {
  let question_id = req.query.question_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    params: {
      question_id: question_id,
      page: 1,
      count: 5
    }
  };

  axios.get(APIurl+'/:question_id/answers', options)
    .then((APIres) => {
      res.status(200).send(APIres.data);
    })
    .catch((err) => {
      console.log('error getting answer data in router', err.response.data);
      res.end();
    })
});


module.exports = router;
