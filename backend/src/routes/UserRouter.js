import { Router } from 'express'
import { UserController } from "../controllers/User";

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.get)

export default userRouter;
