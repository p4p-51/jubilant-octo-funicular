import { Router } from 'express';
import UserRouter from "./UserRouter";
import ContentRouter from "./ContentRouter";
import ExperienceRouter from "./ExperienceRouter";
import StatsRouter from "./StatsRouter";
import QuestionRouter from "./QuestionRouter";
import {FeedbackController} from "../controllers/Feedback";

const router = Router();

router.use('/user', UserRouter)
router.use('/content', ContentRouter)
router.use('/experience', ExperienceRouter)
router.use('/stats', StatsRouter)
router.use('/question', QuestionRouter)


/**
 * @openapi
 * /feedback:
 *  post:
 *      description: submit feedback for a module
 *      requestBody:
 *          description: Feedback body
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - module
 *                          - rating
 *                          - feedback
 *                      properties:
 *                          module:
 *                              type: string
 *                          rating:
 *                              type: integer
 *                              minimum: 0
 *                              maximum: 5
 *                          feedback:
 *                              type: string
 *      responses:
 *          200:
 *              description: Successfully submitted Feedback
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              - success
 *                              - nextStage
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                              nextStage:
 *                                  $ref: '#/components/schemas/ModuleStage'
 */
router.post('/feedback', new FeedbackController().SubmitFeedback)

/**
 * @openapi
 *  components:
 *      schemas:
 *          label:
 *              type: object
 *              required:
 *                  - _id
 *                  - labelString
 *              properties:
 *                  _id:
 *                      type: string
 *                  labelString:
 *                      type: string
 *                  questions:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Question'
 */

/**
 * @openapi
 * /labels:
 *  get:
 *      description: Get all the labels
 *      response:
 *          200:
 *              descriptions: labels
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/label'
 */
router.get('/labels', (req, res) => {
    const labels = [
        {
            '_id': "asdfasdf",
            'labelString': "dsfsaf",
            'questions': "oioi???"
        }
    ]



    res.status(200).send(labels)
} )

export default router