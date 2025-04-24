const User = require('../models/user');


const addToFavourites = async (req, res) => {

    try{

        const { bookid,id } = req.headers;
        const user = await User.findById(id);
        const isBookInFavourites = user.favourites.includes(bookid);
        if(isBookInFavourites){
            return res.status(400).json({message:"Book already in favourites"});

        }
        await User.findByIdAndUpdate(id, {
            $push: { favourites: bookid }
        });
        res.status(200).json({message:"Book added to favourites"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}

const removeFromFavourites = async (req, res) => {
    try{

        const { bookid,id } = req.headers;
        const user = await User.findById(id);
        const isBookInFavourites = user.favourites.includes(bookid);
        if(!isBookInFavourites){
            return res.status(400).json({message:"Book not in favourites"});

        }
        await User.findByIdAndUpdate(id, {
            $pull: { favourites: bookid }
        });
        res.status(200).json({message:"Book removed from favourites"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}
const getFavourites = async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id).populate('favourites');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            status: "Success",
            data: user.favourites,
        });
    } catch (err) {
        console.log("Error in getFavourites:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

 




module.exports = {addToFavourites, removeFromFavourites, getFavourites};