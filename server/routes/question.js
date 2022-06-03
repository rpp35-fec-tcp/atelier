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
    }
  }

  axios.put(`${APIurl}/qa/questions/${question_id}/helpful`)
    .then((APIres) => {
      res.sendStatus(204);
    })
    .catch((err) => {
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
    }
  }

  axios.put(`${APIurl}/qa/answers/${answer_id}/helpful`)
    .then((APIres) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err.response.data, 'Ahelp');
      res.send(err);
    })
})

///////////////////
// Report Q&A  ///
/////////////////

router.put('/reportQuestion', (req, res) => {
  let question_id = req.body.params.question_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    }
  }

  axios.put(`${APIurl}/qa/questions/${question_id}/report`)
    .then((APIres) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err.response.data);
      res.send(err);
    })
})

router.put('/reportAnswer', (req, res) => {
  let answer_id = req.body.params.answer_id;
  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    }
  }

  axios.put(`${APIurl}/qa/answers/${answer_id}/report`)
    .then((APIres) => {
      console.log('reported')
      res.sendStatus(204);
    })
<<<<<<< HEAD
    .catch((err) =>{
      console.log('upvote questions error', err.response.data);
=======
    .catch((err) => {
      console.log(err.response.data);
>>>>>>> 463947011e82c46782d3e9ad8dd98d474983cf10
      res.send(err);
    })
})

///////////////////
//// Add Q&A  ////
/////////////////

router.post('/addQuestion', (req, res) => {
  let product_id = req.body.data.product_id;
  let body = req.body.data.body;
  let name = req.body.data.name;
  let email = req.body.data.email;

  console.log(req.body.data);

  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    params: {
      product_id
    },
    data: {
      body,
      name,
      email
    }
  }

  axios.post(`${APIurl}/qa/questions`, options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err.response.data);
      console.log(err.response.status);
      res.send(err);
    })

})

router.post('/addAnswer', (req, res) => {
  let question_id = req.body.data.question_id;
  let body = req.body.data.body;
  let name = req.body.data.name;
  let email = req.body.data.email;
  let photos = req.body.data.photos;

  console.log(req.body.data);

  let options = {
    headers: {
      'Authorization': `${config.TOKEN}`
    },
    params: {
      question_id: question_id
    },
    data: {
      body,
      name,
      email,
      photos
    }
  }

  axios.post(`${APIurl}/qa/questions/${question_id}/answers`, options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err.response.data);
      res.send(err);
    })

})

module.exports = router;
