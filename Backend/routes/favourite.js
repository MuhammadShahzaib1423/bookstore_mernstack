const router = require('express').Router();
const {addToFavourites, removeFromFavourites, getFavourites} = require('../controller/favourite');
const {authenticatetoken} = require('../routes/userAuth');



router.put('/add-to-favourites',authenticatetoken,addToFavourites);

router.put('/remove-from-favourites',authenticatetoken,removeFromFavourites);
router.get('/get-favourites',authenticatetoken,getFavourites);
module.exports = router;