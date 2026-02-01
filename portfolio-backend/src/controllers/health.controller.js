import { healthCheck } from '../services/health.service.js';

export const getHealth = (_, res) => {
    res.json(healthCheck());
};