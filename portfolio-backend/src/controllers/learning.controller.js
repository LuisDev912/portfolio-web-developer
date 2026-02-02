import { learningCheck } from '../services/learning.service.js';

// Use a class to have all the methods to encapsulate similar functions
export class LearningController {
    static getAll(_, res) { // Use "static" to make methods belong to the function instead of an instance
        return res.json(learningCheck);
    };

    static getById(req, res) {
        const { id } = req.params;
        const selectedCourse = learningCheck.find(course => course.id === id);

        if (!selectedCourse) {
            return res.status(404).json({
                message: 'Not found course',
                id
            })
        }

        return res.json(selectedCourse)
    };
};