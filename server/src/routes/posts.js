import express from 'express';
import {getPosts, createPosts, updatePost, deleteUser} from '../controller/posts.js'
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePost)
router.delete('/:id',deleteUser)
export default router;