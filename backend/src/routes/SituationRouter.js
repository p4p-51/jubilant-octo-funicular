import Router from 'express'
import { SituationController } from "../controllers/Situation";

const situationRouter = Router()
const situationController = new SituationController()

/**
 * @openapi
 * /situation:
 *  get:
 *      description: Get all of the situations that the user has created
 *      responses:
 *          200:
 *              description: All of the situations that the user has created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              required:
 *                                  - situationId
 *                                  - name
 *                                  - labels
 *                              properties:
 *                                  situationId:
 *                                      type: string
 *                                  name:
 *                                      type: string
 *                                      example: ENGGEN 115 group project
 *                                  labels:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          required:
 *                                              - labelId
 *                                              - labelString
 *                                              - questions
 *                                          properties:
 *                                              labelId:
 *                                                  type: string
 *                                              labelString:
 *                                                  type: string
 *                                              questions:
 *                                                  type: array
 *                                                  items:
 *                                                      type: object
 *                                                      required:
 *                                                          - questionId
 *                                                          - questionText
 *                                                      properties:
 *                                                          questionId:
 *                                                              type: string
 *                                                          questionText:
 *                                                              type: string
 *                                                          answer:
 *                                                              type: object
 *                                                              required:
 *                                                                  - s
 *                                                                  - t
 *                                                                  - a
 *                                                                  - r
 *                                                              properties:
 *                                                                  s: 
 *                                                                      type: string
 *                                                                  t: 
 *                                                                      type: string
 *                                                                  a: 
 *                                                                      type: string
 *                                                                  r: 
 *                                                                      type: string
 * 
*/
situationRouter.get('/', situationController.GetAllSituations)

export default situationRouter


