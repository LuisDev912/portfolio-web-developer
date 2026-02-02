import { Router } from 'express';
import healthRoutes from './health.routes.js';
import learningRoutes from './learning.route.js';

const routes = Router();

routes.use('/health', healthRoutes);
routes.use('/learning', learningRoutes);

export default routes;