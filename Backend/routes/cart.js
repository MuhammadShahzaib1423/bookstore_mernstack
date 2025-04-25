const router = require('express').Router();
const {addToCart, removeFromCart,getCart} = require('../controller/cart');
const {authenticatetoken} = require('../routes/userAuth');

router.put('/add-to-cart',authenticatetoken,addToCart);
router.put('/remove-from-cart',authenticatetoken,removeFromCart);

module.exports = router;
