import { healthCheck } from '../services/health.service.js';

export const getHealth = (req, res) => {
    res.json(healthCheck());
};