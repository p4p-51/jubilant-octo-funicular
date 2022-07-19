import { Router } from 'express';
import { ModuleController } from '../controllers/Module';

const moduleRouter = Router();
const moduleController = new ModuleController();

/**
 * @openapi
 * components:
 *      parameters:
 *          moduleIdParam:
 *              name: moduleId
 *              in: path
 *              required: true
 *              description: The ID of the module
 *              schema:
 *                  type: integer
 */

/**
 * @openapi
 * /modules/{moduleId}/feedback:
 *  post:
 *      description: submit rating and feedback for a module
 *      tags:
 *          - Module
 *      parameters:
 *          - $ref: '#/components/parameters/moduleIdParam'
 *      requestBody:
 *          description: Feedback and rating for the specific module
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - rating
 *                          - feedback
 *                      properties:
 *                          rating:
 *                              type: integer
 *                              minimum: 0
 *                              maximum: 5
 *                          feedback:
 *                              type: string
 *      responses:
 *          200:
 *              description: Successfully submitted Feedback
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              - success
 *                              - nextStage
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                              nextStage:
 *                                  $ref: '#/components/schemas/ModuleStage'
 */
moduleRouter.post('/:moduleId/feedback', moduleController.SubmitFeedback);

/**
 * @openapi
 * /modules/{moduleId}/quiz:
 *  post:
 *    description: Submit the score for a module's quiz
 *    tags:
 *      - Module
 *      - Quiz
 *    parameters:
 *      - $ref: '#/components/parameters/moduleIdParam'
 *    requestBody:
 *      description: Which quiz they're submitting and their score
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - stage
 *              - numQuestion
 *              - numCorrect
 *            properties:
 *              stage:
 *                type: string
 *                enum: [prelim, end]
 *              numQuestion:
 *                type: integer
 *              numCorrect:
 *                type: integer
 *
 *    responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 */

export default moduleRouter;
