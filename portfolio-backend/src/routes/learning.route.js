import { Router } from 'express';
import { getLearning, getLearningById } from '../controllers/learning.controller.js';

const learningRouter = Router();

learningRouter.get('/', getLearning);
learningRouter.get('/:id', getLearningById)

export default learningRouter;