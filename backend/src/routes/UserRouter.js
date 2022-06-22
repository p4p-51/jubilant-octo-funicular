import { Router } from 'express'
import { UserController } from "../controllers/User";

const userRouter = Router();
const userController = new UserController();

/**
 * @openapi
 * /user/{userId}:
 *   get:
 *      description: Deisc
 *      parameters:
 *          - in: path
 *            name: userId
 *            required: true
 *            description: Numeric ID of the user to retrieve.
 *            schema:
 *              type: integer
 *      responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                  - userName
 *                  - progress
 *               properties:
 *                  userName:
 *                      type: string
 *                  avatar:
 *                      type: string
 *                  progress:
 *                      $ref: '#/components/schemas/ModuleStage'
 */
userRouter.get('/:userId', userController.getUser)

export default userRouter;
