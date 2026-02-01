import { Router } from 'express';
import healthRoutes from './health.routes.js';
import learningRoutes from './learning.route.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/learning', learningRoutes);

export default router;