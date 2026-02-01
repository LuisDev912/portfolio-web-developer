import express from 'express';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import router from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use('/api', router);

export default app;