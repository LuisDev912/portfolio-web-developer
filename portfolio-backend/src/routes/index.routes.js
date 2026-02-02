import { Router } from 'express';
import { notAllowedMethod } from '../middlewares/notAllowed.middleware.js';
import healthRoutes from './health.routes.js';
import learningRoutes from './learning.route.js';

const routes = Router();

routes.use('/health', healthRoutes, notAllowedMethod);
routes.use('/learning', learningRoutes, notAllowedMethod);

export default routes;