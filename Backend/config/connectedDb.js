const mongoose = require("mongoose");

const connectedDb = async ()=>{
    try{

        await mongoose.connect(`${process.env.URI}`);
        console.log("Connected to MongoDB successfully");
    }
    catch(err){
        console.log("Error in connectedDb",err);
    }
}
connectedDb();