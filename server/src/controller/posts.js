import mongoose  from 'mongoose';
import PostMessage from '../Database/models/postMessage.js';

// get all the posts
export const getPosts = async (req,res)=>{
   try {  
    const PostMessages = await PostMessage.find();
    res.status(200).json(PostMessages);

   } catch (error) {
       res.status(404).json({message:error.message});   
   }
}

// create a new post
export const createPosts = async(req,res)=>{
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPosts = new PostMessage({ title, message, selectedFile, creator, tags })
    try {
        await newPosts.save();
        res.status(201).json(newPosts);     
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

// update the post with id

export const updatePost = async ( req, res) => {

    const post = req.body;
    const {id:_id} = req.params
     if(!mongoose.type.ObjectId.isValid(_id)) {
         return res.status(404).send("no account with that id ")
     }
    try {
        const updatePosts = await PostMessage.findByIdAndUpdate(_id, post, {new:true});
        res.json(updatePosts)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}