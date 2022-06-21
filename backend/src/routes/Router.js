import { Router } from 'express';
import UserRouter from "./UserRouter";
import ContentRouter from "./ContentRouter";
import SituationRouter from "./SituationRouter";
import StatsRouter from "./StatsRouter";

const router = Router();

router.use('/user', UserRouter)
router.use('/content', ContentRouter)
router.use('/situation', SituationRouter)
router.use('/stats', StatsRouter)

export default router