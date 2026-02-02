import { projects } from "../services/projects.service.js";

export const getProjects = (_, res) => {
    res.json(projects);
};