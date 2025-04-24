const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authenticatetoken} = require('../routes/userAuth');

const UserSignup = async (req, res) => {
    try {
        const { username, email, password, address, role } = req.body;

        if (username.length < 4) {
            return res.status(400).json({ message: "Username should be at least 4 characters long" });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Password should be at least 8 characters long" });
        }

        // Optional: Validate role input
        const allowedRoles = ["user", "admin"];
        const finalRole = allowedRoles.includes(role) ? role : "user";

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            address,
            role: finalRole  
        });

        await newUser.save();

        return res.status(201).json({ message: "Signup Successfull" });

    } catch (err) {
        console.log("Error in signup", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const UserSignin = async (req, res) => {

    try{
        const {email,password}= req.body;
        const UnknownUser= await User.findOne({email:email});
        if(!UnknownUser){
            return res.status(400).json({message:"User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password, UnknownUser.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }
        if (UnknownUser && isPasswordValid) {
            const authClaims = [
                { name: UnknownUser.username },
                { role: UnknownUser.role }
            ];
            const token = jwt.sign({ authClaims }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        
            return res.status(200).json({
                message: "Signin Successfull",
                id: UnknownUser._id,
                role: UnknownUser.role,
                token: token
            });
        }
        else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        


    }catch (err){
        console.log("Error in signin",err);
        res.status(500).json({message:"Internal server error"});

    }

}

const getUser = async (req, res) => {   

    try{
const { id } = req.headers;
const data = await User.findById(id);
return res.status(200).json(data);

    }
    catch (err) {
        console.log("Error in getUser", err);
        res.status(500).json({ message: "Internal server error" });
}
}
const updateaddress = async (req, res) => {

try{

const { id } = req.headers;
const { address } = req.body;
await User.findByIdAndUpdate(id, { address: address });
return res.status(200).json({ message: "Address updated successfully" });

}catch (err) {
    console.log("Error in updateaddress", err);
    res.status(500).json({ message: "Internal server error" });

}
}




        
module.exports = {UserSignup,UserSignin,getUser,updateaddress};