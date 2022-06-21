import Router from 'express'
import {ContentController} from "../controllers/Content";

const contentRouter = Router()
const contentController = new ContentController()

/**
 * @openapi
 * /content:
 *  get:
 *      description: get all available content
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
 *                                                  type: string
 */
contentRouter.get('/', contentController.getAllContent)

export default contentRouter

