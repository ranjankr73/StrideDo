import jwt from "jsonwebtoken";

const generateEmailToken = (email, secret_key) => {
    const token = jwt.sign({ email: email }, secret_key, { expiresIn: "2d" });
    return token;
};

const generateAccessToken = (user) => {
    const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 15*60*1000 }
    );
    return token;
};

const generateRefreshToken = (user) => {
    const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: 24*60*60*1000 }
    );
    return token;
};

export {
    generateEmailToken,
    generateAccessToken,
    generateRefreshToken,
};
