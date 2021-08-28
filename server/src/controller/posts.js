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
     if(!mongoose.Types.ObjectId.isValid(_id)) {
         return res.status(404).send("no account with that id ")
     }
    
    try {
        const updatePosts = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true});
        res.json(updatePosts)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

// delete the post
export const deleteUser = (req,res)=>{

    const {id} = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:"no id to update"})
    const deletepost = await PostMessage.findByIdAndRemove(id)
    res.json({message:"post Deleted Successfuly"})
}