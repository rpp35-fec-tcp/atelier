const router = require('express').Router();
const url = require('url');
const querystring = require('querystring');
const {getRelatedProducts, getOneProduct, getOneProductStyle, getReviews} = require('../../githubs/related.js');

router.get('/getOneProduct', (req, res) => {
  let parsedUrl = url.parse(req.url);
  let parsedQs = querystring.parse(parsedUrl.query);
  let id = parsedQs.id;
  return getOneProduct(id)
    .then((response) => res.send(response.data))
    .catch((err) => res.sendStatus(400))
});

router.get('/getOneProductStyle', (req, res) => {
  let parsedUrl = url.parse(req.url);
  let parsedQs = querystring.parse(parsedUrl.query);
  let id = parsedQs.id;
  return getOneProductStyle(id)
    .then((response) => res.send(response.data))
    .catch((err) => res.sendStatus(400))
});

router.get('/getRelatedProducts', (req, res) => {
  let parsedUrl = url.parse(req.url);
  let parsedQs = querystring.parse(parsedUrl.query);
  let id = parsedQs.id;
  return getRelatedProducts(id)
    .then((response) => res.send(response.data))
    .catch((err) => {console.log(err); res.sendStatus(400)})
});

router.get('/getReviews', (req, res) => {
  let parsedUrl = url.parse(req.url);
  let parsedQs = querystring.parse(parsedUrl.query);
  let id = parsedQs.id;
  return getReviews(id)
    .then((response) => res.send(response.data))
    .catch((err) => {console.log(err); res.sendStatus(400)})
});

module.exports = router;