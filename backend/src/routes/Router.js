import {Router} from 'express';
import UserRouter from "./UserRouter";
import ContentRouter from "./ContentRouter";

const router = Router();

router.use('/user', UserRouter)
router.use('/content', ContentRouter)

export default router