import jwt from 'jsonwebtoken';

const getLoggedInUser = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if(!token) {
            return res.status(404).json({
                message: "Token is not found"
            });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;

        next();

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error while getting logged in user"
        })
    }
};

export { getLoggedInUser };