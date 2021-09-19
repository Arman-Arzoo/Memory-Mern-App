import mongoose  from 'mongoose';
import User from '../Database/models/user.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// create a new user
export const createUser = async(req,res)=>{
    const { firstName,lastName,email,password,repeatPassword } = req.body;
   

if(!firstName || !lastName || !email || !password){
    res.status(400).json({message:"please Fill All the filled"})
}

if(password !== repeatPassword){
    res.status(400).json({message:"please Enter a correct password"})
}
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync(password,salt);

 const newUser = new User({
      firstName,
      lastName,
      email,
      password:hash,
      name:`${firstName} ${lastName}`,
      
      })
     try {
        await newUser.save();
        res.status(201).json({result:newUser});     
     } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const signUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const oldUser = await User.findOne({ email });
  
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, 'text', { expiresIn: "1h" });
  
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong"});
    }
  };