import { projects } from "../services/projects.service.js";

// Use a class to have all the methods to encapsulate similar functions
export class ProjectsController {
    static getAll(_, res) { // Use "static" to make methods belong to the function instead of an instance
        return res.json(projects);
    };

    static getById(req, res) {
        const { id } = req.params;
        const numId = Number(id)

        const selectedProject = projects.find(project => project.id === numId);

        if (!selectedProject) {
            return res.status(404).json({
                message: 'Not found project',
                id
            })
        }

        return res.json(selectedProject)
    };
};