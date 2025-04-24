const router = require('express').Router();

const {UserSignup,UserSignin,getUser,updateaddress} = require('../controller/user');
const {authenticatetoken} = require('../routes/userAuth');

router.post('/sign-up',UserSignup);
router.post('/sign-in',UserSignin);
router.get('/get-user',authenticatetoken,getUser);
router.put('/update-address',authenticatetoken,updateaddress);
module.exports = router;
