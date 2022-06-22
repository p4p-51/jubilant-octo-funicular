import Router from 'express'
import {ContentController} from "../controllers/Content";

const contentRouter = Router()
const contentController = new ContentController()

/**
 * @openapi
 * components:
 *      schemas:
 *          ModuleStage:
 *              type: object
 *              required:
 *                  - module
 *                  - stage
 *              properties:
 *                  module:
 *                      type: string
 *                  stage:
 *                      type: integer
 */

/**
 * @openapi
 * /content:
 *  get:
 *      description: get all available content
 *      deprecated: true
 *      responses:
 *          200:
 *              description: A list of all responses
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              required:
 *                                  - moduleId
 *                                  - moduleName
 *                                  - length
 *                                  - stages
 *                              properties:
 *                                  moduleId:
 *                                      type: string
 *                                  moduleName:
 *                                      type: string
 *                                  length:
 *                                      type: integer
 *                                  stages:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          required:
 *                                              - name
 *                                              - id
 *                                          properties:
 *                                              name:
 *                                                  type: string
 *                                              id:
 *                                                  type: integer
 */
contentRouter.get('/', contentController.GetAllContent)

/**
 * @openapi
 * /content/{moduleId}/{stageId}:
 *  get:
 *      description: Get the content of a modules stage
 *      deprecated: true
 *      parameters:
 *          - in: path
 *            name: moduleId
 *            required: true
 *            description: The module ID
 *            schema:
 *                type: integer
 *          - in: path
 *            name: stageId
 *            required: true
 *            description: The stage ID
 *            schema:
 *                type: integer
 *      responses:
 *          200:
 *              description: The content of a module stage
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              subtitle:
 *                                  type: string
 *                              description:
 *                                  type: string
 *                              sections:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          sectionTitle:
 *                                              type: string
 *                                          content:
 *                                              type: string
 */
contentRouter.get('/:moduleId/:stageId', contentController.GetModuleStage)

export default contentRouter

