
const Book = require('../models/book');

const User = require('../models/user');


const addBook = async (req, res) => {
    try{
        const { bookid } = req.headers;
        const user = await User.findById(bookid);
        if(user.role !== "admin" ){
            return res.status(403).json({message:"You are not authorized to add a book"});
        }

        const book = new Book({
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            description:req.body.description,
            language:req.body.language

        });
        await book.save().catch(err => {
            console.log("Error saving book:", err);
         });
         
        res.status(200).json({message:"Book added successfully"});
    }
    catch(err){
        console.log("Error in addBook",err);
        res.status(500).json({message:"Internal server error"});
    }

}

const UpdateBook = async (req, res) => {
    try {
        const { bookid } = req.params; 
        const book = await Book.findById(bookid);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        await Book.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            language: req.body.language,
        });

        return res.status(200).json({ message: "Book updated successfully" });
    } catch (err) {
        console.log("Error in UpdateBook", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteBook = async (req, res) => {

    try{
        const { bookid } = req.params; 
const book = await Book.findById(bookid);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        await Book.findByIdAndDelete(bookid);
        return res.status(200).json({ message: "Book deleted successfully" });

    }
    catch(err){
        console.log("Error in deleteBook", err);
        res.status(500).json({ message: "Internal server error" });
    }

}

const getallbooks = async(req,res)=>{

    try{

        const books = await Book.find({});
        if(!books){
            return res.status(404).json({message:"No books found"});
        }
        else{
            return res.status(200).json(books);
        }
        
    }
    catch(err){
        console.log("Error in getallbooks",err);
        res.status(500).json({message:"Internal server error"});
    }
}

const getrecentbooks = async(req,res)=>{

    try{

        const books = await Book.find({}).sort({createdAt:-1}).limit(5);
        if(!books){
            return res.status(404).json({message:"No books found"});
        }
        else{
            return res.status(200).json(books);
        }
        
    }
    catch(err){
        console.log("Error in getrecentbooks",err);
        res.status(500).json({message:"Internal server error"});
    }
}
const getbookbyid = async(req,res)=>{

try{

    const { bookid } = req.params; 
    const book = await Book.findById(bookid);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    else{
        return res.status(200).json(book);
    }

}
catch(err){
    console.log("Error in getbookbyid",err);
    res.status(500).json({message:"Internal server error"});
}

}
module.exports = {addBook,UpdateBook,deleteBook,getallbooks,getbookbyid,getrecentbooks};