import { learningCheck } from '../services/learning.service.js';

export const getLearning = (_, res) => {
    res.json(learningCheck());
};