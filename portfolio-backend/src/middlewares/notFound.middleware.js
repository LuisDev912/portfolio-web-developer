export const notFoundEndpoint = (req, res) => {
    res.status(404).json({
        message: 'Not found endpoint',
        method: req.method,
        url: req.originalUrl
    });
};