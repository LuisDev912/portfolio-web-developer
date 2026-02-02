import { Router } from 'express';
import { notAllowedMethod } from '../middlewares/notAllowed.middleware.js';
import healthRoutes from './health.routes.js';
import learningRoutes from './learning.route.js';
import projectsRoutes from './projects.routes.js';

const routes = Router();

routes.use('/health', healthRoutes, notAllowedMethod);
routes.use('/learning', learningRoutes, notAllowedMethod);
routes.use('/projects', projectsRoutes, notAllowedMethod)

export default routes;