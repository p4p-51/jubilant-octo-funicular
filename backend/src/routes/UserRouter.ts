import { Router } from 'express';

import { UserController } from '../controllers/User';

const userRouter = Router();
const userController = new UserController();

/**
 * @openapi
 *  components:
 *    parameters:
 *      userIdParam:
 *        name: userId
 *        in: path
 *        required: true
 *        description: Numeric ID of the user
 *        schema:
 *          type: integer
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - userId
 *          - uuid
 *        properties:
 *          userId:
 *            type: integer
 *          uuid:
 *            type: string
 *          userName:
 *            type: string
 *          avatar:
 *            type: string
 *      SelfIntro:
 *        type: object
 *        required:
 *          - body
 *          - attributes
 *        properties:
 *          body:
 *            type: string
 *            example: my name is Bob, and I am a 3rd year SE student...
 *          attributes:
 *            type: array
 *            items:
 *              type: string
 *            example: [name, education, experience]
 *      Stats:
 *        type: object
 *        required:
 *          - accuracy
 *          - numExperiences
 *          - numQuestionsAnswered
 *          - completedModules
 *        properties:
 *          accuracy:
 *            type: object
 *            required:
 *              - before
 *              - after
 *            properties:
 *              before:
 *                type: integer
 *                minimum: 0
 *                maximum: 100
 *              after:
 *                type: integer
 *                minimum: 0
 *                maximum: 100
 *          numExperiences:
 *            type: integer
 *            minimum: 0
 *          numQuestionsAnswered:
 *            type: integer
 *            minimum: 0
 *          completedModules:
 *            type: array
 *            items:
 *              type: string
 *            example: ["Self Introduction", "Organising Situations", "Structuring Responses", "Allocating Situations", "Mannerisms"]
 */

/**
 * @openapi
 *  /users/{userId}:
 *    get:
 *      description: Get the profile and progress of a user
 *      tags:
 *          - User
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      responses:
 *        default:
 *          description: Something unexpected happened
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        200:
 *          description: A single user.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - user
 *                  - progress
 *                properties:
 *                  user:
 *                    $ref: '#/components/schemas/User'
 *                  progress:
 *                    $ref: '#/components/schemas/ModuleStage'
 */
userRouter.get('/:userId', userController.GetUser);

/**
 * @openapi
 *  /users/{userId}/complete:
 *    post:
 *      description: Mark a module/stage as complete for a given using
 *      tags:
 *        - User
 *      parameters:
 *        - $ref: '#/components/parameters/userIdParam'
 *      requestBody:
 *        description: Request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ModuleStage'
 *      responses:
 *        default:
 *          description: Something unexpected happened
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        200:
 *          description: user has successfully completed a stage
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - success
 *                  - nextStage
 *                properties:
 *                  success:
 *                    type: boolean
 *                  nextStage:
 *                    $ref: '#/components/schemas/ModuleStage'
 */
userRouter.post('/:userId/complete', userController.CompleteStage);

/**
 * @openapi
 * /users/{userId}/self-intro:
 *  post:
 *    description: Set a user self introduction
 *    tags:
 *      - User
 *    parameters:
 *      - $ref: '#/components/parameters/userIdParam'
 *    requestBody:
 *      description: User self intro
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SelfIntro'
 *    responses:
 *      default:
 *        description: Something unexpected happened
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      200:
 *        $ref: '#/components/responses/Success'
 *  get:
 *    description: Get a user's self introduction
 *    tags:
 *      - User
 *    parameters:
 *      - $ref: '#/components/parameters/userIdParam'
 *    responses:
 *      default:
 *        description: Something unexpected happened
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      200:
 *        description: Get a users self intro
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SelfIntro'
 */
userRouter.post('/:userId/self-intro', userController.PostIntro);
userRouter.get('/:userId/self-intro', userController.GetIntro);

/**
 * @openapi
 *  /users/{userId}/stats:
 *    get:
 *      description: Get user stats
 *      tags:
 *          - User
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      responses:
 *        default:
 *          description: Something unexpected happened
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        200:
 *          description: A users stats
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Stats'
 */
userRouter.get('/:userId/stats', userController.GetStats);

/**
 * @openapi
 *  /users/register:
 *    post:
 *      description: Register a user in the database
 *      tags:
 *        - User
 *      responses:
 *        default:
 *          $ref: '#/components/responses/DefaultError'
 *        200:
 *          description: A single user.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required:
 *                  - user
 *                  - progress
 *                properties:
 *                  user:
 *                    $ref: '#/components/schemas/User'
 *                  progress:
 *                    $ref: '#/components/schemas/ModuleStage'
 */

userRouter.post('/register', userController.Register);

export default userRouter;
