const router = require('express').Router();
const url = require('url');
const querystring = require('querystring');
const {
  getRelatedProducts,
  postInteractions,
  getAllInfo,
} = require('../../githubs/related');

// get combined information for one product
router.get('/getOneProduct', (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { id } = parsedQs;
  return getAllInfo(id)
    .then((response) => res.send(response))
    .catch(() => res.sendStatus(400));
});
// get combined information for arr of product
router.get('/getRelatedProductsCombinedInfo', (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { id } = parsedQs;
  return getRelatedProducts(id)
    .then((response) => (response.data))
    .then((arr) => Promise.all(arr.map((a) => getAllInfo(a))))
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
});

router.post('/interactions', (req, res) => {
  const data = req.body;
  return postInteractions(data)
    .then(() => res.end())
    .catch(() => res.sendStatus(500));
});

module.exports = router;
