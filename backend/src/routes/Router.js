import { Router } from 'express';
import UserRouter from "./UserRouter";
import ContentRouter from "./ContentRouter";
import SituationRouter from "./SituationRouter";

const router = Router();

router.use('/user', UserRouter)
router.use('/content', ContentRouter)
router.use('/situation', SituationRouter)

export default router