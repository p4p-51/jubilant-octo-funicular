import Router from 'express'
import { StatsController } from "../controllers/Stats";

const router = Router()
const controller = new StatsController()

/**
 * @openapi
 * /stats/graduation:
 *  get:
 *      description: Get the graduation stats of the user
 *      responses:
 *       200:
 *         description: Graduation stats of the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                  - quizAccuracy
 *                  - numExperiences
 *                  - numQuestionsAnswered
 *                  - completedModules
 *               properties:
 *                  quizAccuracy:
 *                      type: object
 *                      required:
 *                          - before
 *                          - after
 *                      properties:
 *                          before:
 *                              type: integer
 *                              example: 26
 *                          after:
 *                              type: integer
 *                              example: 92
 *                  numExperiences:
 *                      type: integer
 *                      example: 6
 *                  numQuestionsAnswered:
 *                      type: integer
 *                      example: 14
 *                  completedModules:
 *                      type: array
 *                      items:
 *                          type: string
 *                      example: ["Self Introduction", "Organising Situations", "Structuring Responses", "Allocating Situations", "Mannerisms"]
*/
router.get('/graduation', controller.GetGraduationStats)

export default router


