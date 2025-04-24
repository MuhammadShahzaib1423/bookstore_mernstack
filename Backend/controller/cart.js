const User = require("../models/user");


const addToCart = async (req, res) => {
    try{
        const { bookid, id } = req.headers;
        const user = await User.findById(id);
        const isBookInCart = user.cart.includes(bookid);
        if(isBookInCart){
            return res.status(400).json({message:"Book already in cart"});
        }
        await User.findByIdAndUpdate(id, {
            $push: { cart: bookid }
        });
        res.status(200).json({message:"Book added to cart"});

    }
    catch (err){
        console.log("Error in addToCart", err);
        res.status(500).json({ message: "Internal server error" });
    }

}

const removeFromCart = async (req, res) => {
    try{
        const { bookid, id } = req.headers;
        const user = await User.findById(id);
        const isBookInCart = user.cart.includes(bookid);
        if(!isBookInCart){
            return res.status(400).json({message:"Book not in cart"});
        }
        await User.findByIdAndUpdate(id, {
            $pull: { cart: bookid }
        });
        res.status(200).json({message:"Book removed from cart"});   

    }
    catch (err){
        console.log("Error in addToCart", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getCart = async (req, res) => {

    try {
        const { id } = req.headers;
        const user = await User.findById(id).populate('cart');
            
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            status: "Success",
            data: user.cart,
        });
    }
    catch (err) {
        console.log("Error in getCart:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}




module.exports = {addToCart, removeFromCart,getCart};