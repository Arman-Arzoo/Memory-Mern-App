import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res)=>{
   try {  
    const PostMessages = await PostMessage.find();
    res.status(200).json(PostMessages);

   } catch (error) {
       res.status(404).json({message:error.message});   
   }
}

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