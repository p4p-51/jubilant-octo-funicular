import Router from 'express'
import { ExperienceController } from "../controllers/Experience";

const router = Router()
const controller = new ExperienceController()

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
 *                                  - _id
 *                                  - name
 *                                  - labels
 *                              properties:
 *                                  _id:
 *                                      type: string
 *                                  name:
 *                                      type: string
 *                                      example: ENGGEN 115 group project
 *                                  labels:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          required:
 *                                              - _id
 *                                              - labelString
 *                                              - questions
 *                                          properties:
 *                                              _id:
 *                                                  type: string
 *                                              labelString:
 *                                                  type: string
 *                                              questions:
 *                                                  type: array
 *                                                  items:
 *                                                      type: object
 *                                                      required:
 *                                                          - _id
 *                                                          - questionText
 *                                                      properties:
 *                                                          _id:
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
router.get('/', controller.GetAllExperiences)

export default router


