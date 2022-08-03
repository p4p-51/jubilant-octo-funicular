import { Request, Response, Router } from 'express';

import { LabelController } from '../controllers/Label';
import ContentRouter from './ContentRouter';
import ExperienceRouter from './ExperienceRouter';
import ModuleRouter from './ModuleRouter';
import QuestionRouter from './QuestionRouter';
import UserRouter from './UserRouter';

const router = Router();

router.use('/users', UserRouter);
router.use('/modules', ModuleRouter);
router.use('/content', ContentRouter);
router.use('/experiences', ExperienceRouter);
router.use('/questions', QuestionRouter);

/**
 * @openapi
 * components:
 *  securitySchemes:
 *    BearerAuth:
 *      type: http
 *      scheme: bearer
 *  responses:
 *    Success:
 *      description: The specified request was successful
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Success'
 *    NotFound:
 *      description: The specified resource was not found
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Error'
 *    Unauthorized:
 *      description: Unauthorized
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Error'
 *  schemas:
 *    Success:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *      required:
 *        - success
 *    # Schema for error response body
 *    Error:
 *      type: object
 *      properties:
 *        code:
 *          type: integer
 *        message:
 *          type: string
 *      required:
 *        - code
 *        - message
 */

/**
 * @openapi
 *  components:
 *      schemas:
 *          Labels:
 *            type: string
 *            enum: [leadership, teamwork, conflict]
 */

/**
 * @openapi
 * /labels:
 *  get:
 *    description: Get all the labels
 *    tags:
 *      - Label
 *    responses:
 *      default:
 *        description: Unexpected Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      200:
 *        description: labels
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  label:
 *                    $ref: '#/components/schemas/Labels'
 *                  questions:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Question'
 *                    example:
 *                      - questionId: leadership_question_id_1
 *                        questionText: tell me about a time when you took charge of a project
 */
router.get('/labels', new LabelController().GetLabel);

export default router;
