import express from "express";
import { auth } from "../middleware/auth.js";
import {
  getPosts,
  createPosts,
  updatePost,
  deleteUser,
  likePost,
  commentPost,
} from "../controller/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deleteUser);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);
export default router;
