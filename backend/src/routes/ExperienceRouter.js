import Router from 'express';
import { ExperienceController } from '../controllers/Experience';

const router = Router();
const controller = new ExperienceController();

/**
 * @openapi
 * components:
 *      schemas:
 *          Experience:
 *              type: object
 *              required:
 *                  - _id
 *                  - name
 *              properties:
 *                  _id:
 *                      type: string
 *                      example: exp_id_1
 *                  name:
 *                      type: string
 *                      example: ENGGEN115
 *                  labels:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Label'
 */

/**
 * @openapi
 * /experiences:
 *  get:
 *      tags:
 *          - Experience
 *      description: Get all the experiences that the user has created
 *      responses:
 *          200:
 *              description: All the situations that the user has created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Experience'
 *  post:
 *      tags:
 *          - Experience
 *      description: Add an experience for the user
 *      requestBody:
 *          description: The experience
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Experience'
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
 */
router.get('/', controller.GetAllExperiences);
router.post('/', controller.AddExperience);

export default router;
