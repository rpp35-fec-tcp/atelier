const router = require('express').Router();
const axios = require('axios');
const APIurl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
const config = require('../../config.js');

///////////////////
///   GET Q&A   //
/////////////////

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

  axios.get(`${APIurl}/qa/questions`, options)
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
      page: 1,
      count: 5
    }
  };

  axios.get(`${APIurl}/qa/questions/${question_id}/answers`, options)
    .then((answerAPIres) => {
      res.status(200).send(answerAPIres.data);
    })
    .catch((err) => {
      console.log('error getting answer data in router', err.response.data);
      res.end();
    })
});

///////////////////
// Upvote Q&A  ///
/////////////////


//upvote questions route
router.put('/upvoteQuestionHelpful', (req, res) => {
  let question_id = req.body.params.question_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    }}

  axios.put(`${APIurl}/qa/questions/${question_id}/helpful`)
    .then((APIres) => {
      res.sendStatus(204);
    })
    .catch((err) =>{
      console.log(err.response.data);
      res.send(err);
    })
})

//upvote answers route
router.put('/upvoteAnswerHelpful', (req, res) => {
  let answer_id = req.body.params.answer_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    }}

  axios.put(`${APIurl}/qa/answers/${answer_id}/helpful`)
    .then((APIres) => {
      res.sendStatus(204);
    })
    .catch((err) =>{
      console.log(err.response.data, 'Ahelp');
      res.send(err);
    })
})

///////////////////
// Report Q&A  ///
/////////////////

router.put('/reportAnswer', (req, res) => {
  let answer_id = req.body.params.answer_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    }}

  axios.put(`${APIurl}/qa/answers/${answer_id}/report`)
    .then((APIres) => {
      console.log('reported')
      res.sendStatus(204);
    })
    .catch((err) =>{
      console.log(err.response.data);
      res.send(err);
    })
})


module.exports = router;
