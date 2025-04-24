const express = require('express');

const app = express();

require('dotenv').config();
require("./config/connectedDb")


const user = require('./routes/user');
const book = require('./routes/book');
const favourite = require('./routes/favourite');
const cart = require('./routes/cart');
app.use(express.json());
app.use("/bookstore",user);
app.use("/bookstore" ,book);
app.use("/bookstore/book",favourite);
app.use("/bookstore/cart",cart);

app.get('/',(req,res)=>{
    res.send('Hello World!');

});
app.listen (process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT} `);
});