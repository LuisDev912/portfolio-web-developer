export const notAllowedMethod = (req, res) => {
    res.status(405).json({
        message: 'Not allowed method',
        method: req.method
    });
};