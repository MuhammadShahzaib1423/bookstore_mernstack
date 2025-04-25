
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");

const Orderplace = async (req, res) => {

    try{
        const { id } = req.headers;
        const { order } = req.body;

        for(const orderData of order){
            const newOrder = new Order ({ use: id, book: orderData._id });

            const orderDataFromDb = await newOrder.save();
              //Saving Order in user model
            await User.findByIdAndUpdate(id,{
                 $push:{ orders: orderDataFromDb._id},
            });
            //clear cart
            await User.findByIdAndUpdate(id, {
                $push: { orders: newOrder._id }
            });
        }
        return res.status(200).json({ message: "Order placed successfully" });
    }
    catch (err){
        console.log("Error in Orderplace", err);
        res.status(500).json({ message: "Internal server error" });
    }
}


const getorderhistory = async(req,res )=>{

    try{

        const { id } = req.headers;
        const userData = await User.findById(id).populate({
            path: "orders",
            populate: { path: "book" },
        });

        const orderData = userData.orders.reverse();
        return res.status(200).json({
            status: "Success",
            data: orderData,
        });

    }
    catch(err){
        console.log("Error in getorderhistory", err);
        res.status(500).json({ message: "Internal server error" });
    }

}

const getallorders = async (req, res) => {

    try{
        const userData = await Order.find().populate({
                    path: "book",
        }).sort({ createdAt: -1 });
        return res.status(200).json({
            status: "Success",
            data: userData,
        });



    }
    catch(err){
        console.log("Error in getallorders", err);
        res.status(500).json({ message: "Internal server error" });
    }

}

const updateorderstatus = async(req, res) => {

    try{

        const { id } = req.params;

        await Order.findByIdAndUpdate(id, {
            status:req.body.status});

            return res.json({
                status: "Success",
                message: "Order status updated successfully",
            })

    }
    catch(err){
        console.log("Error in updateorderstatus", err);
        res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = {Orderplace,getorderhistory,getallorders,updateorderstatus};