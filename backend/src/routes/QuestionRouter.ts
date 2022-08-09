import { Router } from 'express';

import { QuestionController } from '../controllers/Question';

const router = Router();
const questionController = new QuestionController();

/**
 * @openapi
 *  components:
 *    schemas:
 *      Answer:
 *        type: object
 *        required:
 *          - s
 *          - t
 *          - a
 *          - r
 *        properties:
 *          s:
 *            type: string
 *            example: <Description of Situation>
 *          t:
 *            type: string
 *            example: <Description of Task>
 *          a:
 *            type: string
 *            example: <Description of Action>
 *          r:
 *            type: string
 *            example: <Description of Result>
 *      Question:
 *        type: object
 *        required:
 *          - questionId
 *          - questionText
 *        properties:
 *          questionId:
 *            type: integer
 *            example: question_id
 *          questionText:
 *            type: string
 *            example: tell me about a time...
 *          labelId:
 *            $ref: '#/components/schemas/Labels'
 *    parameters:
 *      questionIdParam:
 *        name: questionId
 *        in: path
 *        required: true
 *        description: The id of the question
 *        schema:
 *          type: integer
 */

/**
 * @openapi
 * /questions:
 *  get:
 *    tags:
 *     - Questions
 *    description: Get all the questions available, along with a list of the current user's relevant experiences
 *    responses:
 *      default:
 *        $ref: '#/components/responses/DefaultError'
 *      200:
 *        description: A list of questions, each with a list of relevant experiences
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                allOf:
 *                  - $ref: '#/components/schemas/Question'
 *                  - type: object
 *                    properties:
 *                      experiences:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/ExperienceId'
 */

router.get('/', questionController.GetQuestionsWithExperiences);

/**
 * @openapi
 * /questions/{questionId}/answers:
 *  get:
 *    tags:
 *      - Questions
 *    description: Get the answers by the user to a given question
 *    parameters:
 *      - $ref: '#/components/parameters/questionIdParam'
 *    responses:
 *      default:
 *        description: Something unexpected happened
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      200:
 *        description: A list of answers and experiences relating to the question (grouped by label id)
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  experienceId:
 *                    type: integer
 *                  answer:
 *                    $ref: '#/components/schemas/Answer'
 *                required:
 *                  - experienceId
 *                  - answer
 *  post:
 *    tags:
 *      - Questions
 *    description: Submit an answer to a specific question
 *    parameters:
 *      - $ref: '#/components/parameters/questionIdParam'
 *    requestBody:
 *      description: An answer to a given question and response
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - experienceId
 *              - answer
 *            properties:
 *              experienceId:
 *                type: integer
 *              answer:
 *                $ref: '#/components/schemas/Answer'
 *    responses:
 *      default:
 *        description: Something unexpected happened
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *      200:
 *        description: success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 */

router.get('/:questionId/answers', questionController.GetAnswer);
router.post('/:questionId/answers', questionController.AnswerQuestion);

export default router;
