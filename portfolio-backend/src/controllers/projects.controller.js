import { projects } from "../services/projects.service.js";

// Use a class to have all the methods to encapsulate similar functions
export class ProjectsController {
    static getAll(req, res) { // Use "static" to make methods belong to the function instead of an instance
        const { featured } = req.query;

        let result = projects;

        if (featured === "true") {
            result = projects.filter(project => project.featured === true)
        };

        res.json(result);
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