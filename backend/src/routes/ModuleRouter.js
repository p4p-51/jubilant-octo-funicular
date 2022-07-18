import { Router } from 'express'
import { ModuleController} from "../controllers/Module";

const moduleRouter = Router()
const moduleController = new ModuleController()

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
moduleRouter.post("/:moduleId/feedback", moduleController.SubmitFeedback);


export default moduleRouter;