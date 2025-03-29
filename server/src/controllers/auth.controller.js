import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validate } from "email-validator";
import { User } from "../models/user.model.js";

import {
    generateEmailToken,
    generateAccessToken,
    generateRefreshToken,
} from "../utils/tokenGenerator.js";

import {
    sendVerificationEmail,
    sendResetPasswordEmail,
} from "../utils/mailSender.js";

const getCurrentUser = async (req, res) => {
    try {
        const { userId } = req.user;

        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res
                .status(401)
                .clearCookie("accessToken", {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "Strict",
                })
                .clearCookie("refreshToken", {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "Strict",
                })
                .json({
                    message: "User not found!",
                });
        }

        return res.status(200).json({
            user: {
                fullName: existedUser.fullName,
                email: existedUser.email,
            },
            message: "User data fetched successfully.",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error while fetching user data!",
        });
    }
};

const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(404).json({
                message: "All fields are required!",
            });
        }

        const validEmail = validate(email);
        if (!validEmail) {
            return res.status(404).json({
                message: "Please enter a valid email",
            });
        }

        const existedUser = await User.findOne({ email: email });

        if (existedUser) {
            return res.status(400).json({
                message: "Email is already in use!",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            fullName: fullName,
            email: email,
            password: hashedPassword,
        });

        const savedUser = await user.save();

        const accessToken = generateAccessToken(savedUser);
        const refreshToken = generateRefreshToken(savedUser);

        savedUser.refreshToken = refreshToken;

        await savedUser.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        }).cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 60 * 1000,
            sameSite: "Strict",
        });

        if (!savedUser) {
            return res.status(500).json({
                message: "Issue in saving user to db",
            });
        }

        return res.status(201).json({
            message:
                "Account created successfully! Check your email to verify.",
            user: {
                fullName: savedUser.fullName,
                email: savedUser.email,
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while creating an account!",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({
                message: "All fields are required!",
            });
        }

        const validEmail = validate(email);
        if (!validEmail) {
            return res.status(404).json({
                message: "Please enter a valid email",
            });
        }

        const existedUser = await User.findOne({ email: email });

        if (!existedUser) {
            return res.status(401).json({
                message: "User does not exist!",
            });
        }

        const correctPassword = await bcrypt.compare(
            password,
            existedUser.password
        );

        if (!correctPassword) {
            return res.status(401).json({
                message: "Password is incorrect",
            });
        }

        const accessToken = generateAccessToken(existedUser);
        const refreshToken = generateRefreshToken(existedUser);

        existedUser.refreshToken = refreshToken;
        const savedUser = await existedUser.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        }).cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 60 * 1000,
            sameSite: "Strict",
        });

        return res.status(200).json({
            message: "You have been logged in successfully!",
            user: {
                fullName: savedUser.fullName,
                email: savedUser.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while logging into your account!",
        });
    }
};

const updateAccessToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh Token required",
                code: "MISSING_REFRESH_TOKEN"
            });
        }

        let decoded;
        try {
            decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        } catch (error) {
            return res.status(403).clearCookie("refreshToken").json({
                message: "Invalid or expired refresh token",
            });
        }

        const existedUser = await User.findById(decoded.userId);

        if (!existedUser || existedUser.refreshToken !== refreshToken) {

            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
            }).clearCookie("accessToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
            });

            return res.status(403).json({
                message: "Invalid Refresh Token",
            });
        }

        const newAccessToken = generateAccessToken(existedUser);
        const newRefreshToken = generateRefreshToken(existedUser);

        existedUser.refreshToken = newRefreshToken;
        await existedUser.save();

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        }).cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 60 * 1000,
            sameSite: "Strict",
        });

        return res.status(200).json({
            message: "Access Token updated successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error while updating access token!"
        });
    }
};

const logout = async (req, res) => {
    try {
        const userId = req.user.userId;
        const existedUser = await User.findById(userId);
        if (!existedUser) {
            return res.status(401).json({
                message: "User does not exist",
            });
        }

        existedUser.refreshToken = null;
        await existedUser.save();

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        }).clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        });

        return res.status(200).json({
            message: "Logged out successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error while logging out",
        });
    }
};

// Advanced features
const verifyEmail = async (req, res) => {
    try {
        const token = req.query.token;

        if (!token) {
            return res.status(400).json({
                msg: "Invalid token",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.EMAIL_VERIFICATION_SECRET
        );

        const existedUser = await User.findOne({ email: decoded.email });

        if (!existedUser) {
            return res.status(400).json({
                msg: "User not found",
            });
        }

        existedUser.verified = true;
        await existedUser.save();

        return res.status(200).json({
            msg: "Email verified successfully",
        });
    } catch (error) {
        return res.status(400).json({
            msg: "Invalid or expired token",
        });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(401).json({
                msg: "Email is required to reset password",
            });
        }

        const existedUser = await User.findOne({ email: email });

        if (!existedUser) {
            return res.status(404).json({
                msg: "User not found",
            });
        }

        const token = generateEmailToken(
            email,
            process.env.RESET_PASSWORD_SECRET
        );

        existedUser.resetPasswordToken = token;
        existedUser.resetPasswordExpires = Date.now() + 3600000;

        await existedUser.save();

        await sendResetPasswordEmail(email, token);

        return res.status(200).json({
            msg: "Reset Password link sent successfully",
            data: token,
        });
    } catch (err) {
        res.status(500).json({
            msg: "Internal server error while sending reset password link",
        });
    }
};

const resetPassword = async (req, res) => {
    try {
        const token = req.query.token;

        const { newPassword, confirmPassword } = req.body;

        if (!token) {
            return res.status(400).json({
                msg: "Invalid token",
            });
        }

        if (!newPassword || !confirmPassword) {
            return res.status(401).json({
                msg: "All fields are required!",
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                msg: "Confirm Password must be same as New Password",
            });
        }

        const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET);

        const existedUser = await User.findOne({
            email: decoded.email,
            resetPasswordToken: token,
        });

        if (!existedUser || existedUser.resetPasswordExpires < Date.now()) {
            return res.status(400).json({
                message: "Token is invalid or expired",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        existedUser.password = hashedPassword;
        existedUser.resetPasswordToken = undefined;
        existedUser.resetPasswordExpires = undefined;

        await existedUser.save();

        return res.status(200).json({
            msg: "Password reset successfully",
        });
    } catch (err) {
        return res.status(500).json({
            msg: "Internal server error while resetting password",
        });
    }
};

const changePassword = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(401).json({
                msg: "All fields are required!",
            });
        }

        const existedUser = await User.findById(userId);

        if (!existedUser) {
            return res.status(404).json({
                msg: "User does not exist",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const verifiedPassword = await bcrypt.compare(
            currentPassword,
            existedUser.password
        );

        if (!verifiedPassword) {
            return res.status(401).json({
                msg: "Current Password is not correct",
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, salt);

        existedUser.password = hashedPassword;
        await existedUser.save();

        return res.status(200).json({
            msg: "Password changed successfully",
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error while changing password",
        });
    }
};

export {
    getCurrentUser,
    signup,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword,
    changePassword,
    updateAccessToken,
};
