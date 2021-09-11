import express from 'express';
import {createUser} from '../controller/user.js'
const router = express.Router();

router.get('/',createUser);

export default router;