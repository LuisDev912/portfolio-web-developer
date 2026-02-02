import { Router } from "express";
import { ProjectsController } from "../controllers/projects.controller.js";

const projectsRouter = Router();

projectsRouter.get('/', ProjectsController.getAll);
projectsRouter.get('/:id', ProjectsController.getById);

export default projectsRouter;