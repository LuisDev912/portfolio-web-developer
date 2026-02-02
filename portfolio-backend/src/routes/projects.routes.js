import { Router } from "express";
import { getProjects } from "../controllers/projects.controller.js";

const projectsRouter = Router();

projectsRouter.get('/', getProjects);

export default projectsRouter;