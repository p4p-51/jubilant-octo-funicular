import Router from 'express'
import { QuestionController } from "../controllers/Question";

const router = Router()
const controller = new QuestionController()

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
*/
router.get('/experience', controller.GetQuestionsWithExperiences)

export default router


