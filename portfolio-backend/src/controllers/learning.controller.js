import { learningCheck } from '../services/learning.service.js';

export const getLearning = (_, res) => {
    res.json(learningCheck);
};

export const getLearningById = (req, res) => {
    const { id } = req.params;

    const course = learningCheck.find(course => course.id === id);

    return res.json(course);
}