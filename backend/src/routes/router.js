import {Router} from 'express';
import {UserController} from "../controllers/user";

const router = Router();

const userCon = new UserController();
router.use('/user', userCon.basic)

export default router