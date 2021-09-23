import mongoose from "mongoose";
import PostMessage from "../Database/models/postMessage.js";

// get all the posts
export const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find().populate('creator','_id name imageUrl')
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// create a new post
export const createPosts = async (req, res) => {
  const { title, message, selectedFile, tags } = req.body;
  const newPosts = new PostMessage({
    title,
    message,
    selectedFile,
    tags,
    creator:req.user._id
   
  });
  try {
    await newPosts.save();
    res.status(201).json(newPosts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// update the post with id
export const updatePost = async (req, res) => {
  const post = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("no post with that id ");
  }

  try {
    const updatePosts = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );
    res.json(updatePosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// delete the post
export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "no post with that id to update" });
  const deletepost = await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "post Deleted Successfuly" });
};
// likepost the post
export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "no post to like" });
  const post = await PostMessage.findById(id);
  const likepost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(likepost);
};
