const router = require('express').Router();
const {getProduct} = require('../../githubs/related.js');

router.get('/products', (req, res) => {
  return getProduct()
    .then((response) => res.send(response.data))
    .catch((err) => res.sendStatus(400))
})

module.exports = router;