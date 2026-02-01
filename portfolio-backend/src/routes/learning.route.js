import { Router } from 'express';
import { getLearning } from '../controllers/learning.controller.js';

const router = Router();

router.get('/', getLearning);

export default router;