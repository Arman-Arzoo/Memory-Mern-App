import mongoose  from 'mongoose';
import User from '../Database/models/user.js';
import bcrypt from 'bcryptjs'
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
      password:hash
      })
    try {
        await newUser.save();
        res.status(201).json(newPosts);     
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}