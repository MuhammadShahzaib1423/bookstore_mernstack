const router = require('express').Router();

const {addBook,UpdateBook,deleteBook,getallbooks,getrecentbooks,getbookbyid} = require('../controller/book');
const {authenticatetoken} = require('../routes/userAuth');

router.post('/add-book',authenticatetoken,addBook);
router.post('/update-book/:id',authenticatetoken,UpdateBook);
router.post('/delete-book/:id',authenticatetoken,deleteBook);
router.get('/get-books',getallbooks);
router.get('/get-recent-books',getrecentbooks);
router.get('/get-books/:bookid',getbookbyid);
module.exports = router;