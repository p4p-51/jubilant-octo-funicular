import { Router } from 'express';
import UserRouter from './UserRouter';
import ContentRouter from './ContentRouter';
import ExperienceRouter from './ExperienceRouter';
import QuestionRouter from './QuestionRouter';
import ModuleRouter from './ModuleRouter';

const router = Router();

router.use('/users', UserRouter);
router.use('/modules', ModuleRouter);
router.use('/content', ContentRouter);
router.use('/experiences', ExperienceRouter);
router.use('/questions', QuestionRouter);

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
 */

/**
 * @openapi
 * /labels:
 *  get:
 *      description: Get all the labels
 *      tags:
 *        - Label
 *      responses:
 *          200:
 *              description: labels
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
      _id: 'asdfasdf',
      labelString: 'dsfsaf',
      questions: 'oioi???',
    },
  ];
  res.status(200).send(labels);
});

export default router;
