import Router from 'express'
import { QuestionController } from "../controllers/Question";

const router = Router()
const controller = new QuestionController()

/**
 * @openapi
 * components:
 *      schemas:
 *          Answer:
 *              type: object
 *              required:
 *                  - s
 *                  - t
 *                  - a
 *                  - r
 *              properties:
 *                  s:
 *                      type: string
 *                  t:
 *                      type: string
 *                  a:
 *                      type: string
 *                  r:
 *                      type: string
 *          Question:
 *              type: object
 *              required:
 *                  - _id
 *                  - questionText
 *              properties:
 *                  _id:
 *                      type: string
 *                  questionText:
 *                      type: string
 *                  answer:
 *                      oneOf:
 *                         - $ref: '#/components/schemas/Answer'
 *                         - type: array
 *                           items:
 *                              $ref: '#/components/schemas/Answer'
 */

/**
 * @openapi
 * /question/experience:
 *  get:
 *      description: Get all the questions each with the user's relevant experiences for that question
 *      responses:
 *          200:
 *              description: A list of questions, each with a list of relevant expriences
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              allOf:
 *                                  - $ref: '#/components/schemas/Question'
 *                                  - type: object
 *                                    properties:
 *                                      experiences:
 *                                          type: array
 *                                          items:
 *                                              $ref: '#/components/schemas/experience'
 *
*/
router.get('/experience', controller.GetQuestionsWithExperiences)

/**
 * @openapi
 * /question/response:
 *  get:
 *      description: Get all the questions each with the user's relevant experiences and saved responses for that question
 *      responses:
 *          200:
 *              description: A list of questions, each with a list of relevant expriences and saved responses
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              required:
 *                                  - _id
 *                                  - questionText
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                  questionText:
 *                                      type: string
 *                                      example: Tell me about a time when you experienced a conflict
 *                                  experiences:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          required:
 *                                              - _id
 *                                              - value
 *                                          properties:
 *                                              _id:
 *                                                  type: string
 *                                              value:
 *                                                  type: string
 *                                  responses:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          required:
 *                                              - experience
 *                                              - answer
 *                                          properties:
 *                                              experience:
 *                                                  type: object
 *                                                  required:
 *                                                      - _id
 *                                                      - value
 *                                              answer:
 *                                                  $ref: '#/components/schemas/Answer'
*/
router.get('/response', controller.GetQuestionsWithResponses)

/**
 * @openapi
 * /question/answer:
 *  post:
 *      description: Answer a question
 *      requestBody:
 *          description: answer
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      allOf:
 *                          -   type: object
 *                              required:
 *                                  - questionId
 *                                  - situationId
 *                              properties:
 *                                  questionId:
 *                                      type: string
 *                                  situationId:
 *                                      type: string
 *                          -   $ref: '#/components/schemas/Answer'
 *      responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *
 */
router.post('/answer', controller.Answer)

export default router


