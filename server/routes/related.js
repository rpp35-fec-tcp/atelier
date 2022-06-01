const router = require('express').Router();
const url = require('url');
const querystring = require('querystring');
const {
  getRelatedProducts,
  getOneProduct,
  getOneProductStyle,
  getReviews,
  postInteractions,
} = require('../../githubs/related');

router.get('/getOneProduct', (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { id } = parsedQs;
  return getOneProduct(id)
    .then((response) => res.send(response.data))
    .catch(() => res.sendStatus(400));
});

router.get('/getOneProductStyle', (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { id } = parsedQs;
  return getOneProductStyle(id)
    .then((response) => res.send(response.data))
    .catch(() => res.sendStatus(400));
});

router.get('/getRelatedProducts', (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { id } = parsedQs;
  return getRelatedProducts(id)
    .then((response) => res.send(response.data))
    .catch(() => res.sendStatus(400));
});

router.get('/getReviews', (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { id } = parsedQs;
  return getReviews(id)
    .then((response) => res.send(response.data))
    .catch(() => res.sendStatus(400));
});

router.post('/interactions', (req, res) => {
  const data = req.body;
  return postInteractions(data)
    .then(() => res.end())
    .catch(() => res.sendStatus(500));
});

module.exports = router;
