import { Router } from 'express';

import { ExperienceController } from '../controllers/Experience';

const router = Router();
const controller = new ExperienceController();

/**
 * @openapi
 *  components:
 *    parameters:
 *      experienceIdParam:
 *        name: experienceId
 *        in: path
 *        required: true
 *        description: The numeric ID of the experience
 *        schema:
 *          type: integer
 *    schemas:
 *      ExperienceId:
 *        type: object
 *        required:
 *          - name
 *          - experienceId
 *        properties:
 *          name:
 *            type: string
 *            example: ENGGEN115
 *          experienceId:
 *            type: integer
 *            example: 1
 *          labels:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Labels'
 *      Experience:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            example: ENGGEN115
 *          labels:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Labels'
 */

/**
 * @openapi
 * /experiences:
 *  get:
 *    tags:
 *      - Experience
 *    description: Get all the experiences that the user has created
 *    responses:
 *      200:
 *        description: All the situations that the user has created
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ExperienceId'
 *  put:
 *    tags:
 *      - Experience
 *    description: Add an experience for the user
 *    requestBody:
 *      description: The experience
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Experience'
 *    responses:
 *      200:
 *        description: success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                experienceId:
 *                  type: integer
 *                success:
 *                  type: boolean
 *              required:
 *                - experienceId
 *                - success
 */
router.get('/', controller.GetAllExperiences);
router.put('/', controller.AddExperience);

/**
 * @openapi
 *  /experiences/{experienceId}/:
 *    post:
 *      tags:
 *        - Experience
 *      description: Change an experience's name or labels
 *      parameters:
 *        - $ref: '#/components/parameters/experienceIdParam'
 *      requestBody:
 *        description: The label to delete
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                labels:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Labels'
 *      responses:
 *        default:
 *          description: Something unexpected happened
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        200:
 *          $ref: '#/components/responses/Success'
 *    delete:
 *      deprecated: true
 *      tags:
 *        - Experience
 *      description: Remove certain labels from an experience
 *      parameters:
 *        - $ref: '#/components/parameters/experienceIdParam'
 *      requestBody:
 *        description: The label to delete
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                labels:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Labels'
 *              required:
 *                - labels
 *      responses:
 *        default:
 *          description: Something unexpected happened
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *        200:
 *          $ref: '#/components/responses/Success'
 */
router.post('/:experienceId', controller.updateExperience);
router.delete('/:experienceId', controller.deleteLabel);

export default router;
