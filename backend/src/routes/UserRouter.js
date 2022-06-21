import { Router } from 'express'
import { UserController } from "../controllers/User";

const userRouter = Router();
const userController = new UserController();

/**
 * @swagger
 * /user:
 *   get:
 *     description: Returns user
 *     responses:
 *       200:
 *         description: hello world
 */
userRouter.get('/:userId', userController.getUser)

export default userRouter;
