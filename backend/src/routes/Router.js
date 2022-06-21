import { Router } from 'express';
import UserRouter from "./UserRouter";
import ContentRouter from "./ContentRouter";
import SituationRouter from "./SituationRouter";
import StatsRouter from "./StatsRouter";
import QuestionRouter from "./QuestionRouter";

const router = Router();

router.use('/user', UserRouter)
router.use('/content', ContentRouter)
router.use('/situation', SituationRouter)
router.use('/stats', StatsRouter)
router.use('/question', QuestionRouter)

export default router