const router = require('express').Router();
const {Orderplace,getorderhistory,getallorders ,updateorderstatus} = require('../controller/order');
const {authenticatetoken} = require('../routes/userAuth');

router.post('/place-order',authenticatetoken,Orderplace);
router.get('/get-order-history',authenticatetoken,getorderhistory);
router.get('/get-all-orders',authenticatetoken,getallorders);
router.put('/update-order-status/:id',authenticatetoken,updateorderstatus);

module.exports = router;
