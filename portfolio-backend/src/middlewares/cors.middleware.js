import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://portfolio-web-frontend-virid.vercel.app/'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => {
    return cors({
        origin: (origin, callback) => {
            if (acceptedOrigins.includes(origin) || !origin) {
                return callback(null, true)
            }

            return callback(new Error('Forbidden origin.'))
        }
    });
};