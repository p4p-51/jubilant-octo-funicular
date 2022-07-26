import { Router } from 'express';
import UserRouter from './UserRouter';
import ContentRouter from './ContentRouter';
import ExperienceRouter from './ExperienceRouter';
import QuestionRouter from './QuestionRouter';
import ModuleRouter from './ModuleRouter';

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
 *            type: object
 *            properties:
 *              code:
 *                type: string
 *              message:
 *                type: string
 *            required:
 *              - code
 *              - message
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
 *     # Schema for error response body
 *    Error:
 *      type: object
 *      properties:
 *        code:
 *          type: string
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
 *          Label:
 *              type: object
 *              required:
 *                  - labelString
 *              properties:
 *                  labelText:
 *                      type: string
 *                      example: leadership
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
 *                allOf:
 *                  - $ref: '#/components/schemas/Label'
 *                  - type: object
 *                    required:
 *                      - questions
 *                    properties:
 *                      questions:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Question'
 *                        example:
 *                          - _id: leadership_question_id_1
 *                            questionText: tell me about a time when you took charge of a project
 */
router.get('/labels', (req, res) => {
  const labels = [
    {
      _id: 'label_id_1',
      labelString: 'leadership',
      questions: [
        {
          _id: 'question_id_1',
          questionText:
            'Tell me about a time when you took charge of a project',
        },
        {
          _id: 'question_id_2',
          questionText:
            'Tell me about a time when your leadership position was challenged',
        },
      ],
    },
    {
      _id: 'label_id_2',
      labelString: 'conflict',
      questions: [
        {
          _id: 'question_id_3',
          questionText:
            'Tell me about a time when there was conflict in your group',
          something: 'dsaf',
        },
      ],
    },
  ];
  res.status(200).send(labels);
});

export default router;
