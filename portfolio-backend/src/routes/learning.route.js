import { Router } from 'express';
import { LearningController } from '../controllers/learning.controller.js';

const learningRouter = Router();

learningRouter.get('/', LearningController.getAll);
learningRouter.get('/:id', LearningController.getById);

export default learningRouter;