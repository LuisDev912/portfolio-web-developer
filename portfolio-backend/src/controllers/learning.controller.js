import { learningCheck } from '../services/learning.service.js';

// Use a class to have all the methods to encapsulate similar functions
export class LearningController {
    static async getAll(_, res) { // Use "static" to make methods belong to the function than an instance
        return res.json(learningCheck);
    };

    static async getById(req, res) {
        const { id } = req.params;
        const course = await learningCheck.find(course => course.id === id);

        return res.json(course)
    };
};