export const healthCheck = () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
});