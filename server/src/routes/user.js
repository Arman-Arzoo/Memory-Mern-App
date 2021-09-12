import express from 'express';
import {createUser,signUser} from '../controller/user.js'
const router = express.Router();

router.post('/signup',createUser);
router.post('/signin',signUser)

export default router;