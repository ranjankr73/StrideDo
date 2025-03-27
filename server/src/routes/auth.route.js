import express from "express";
import {
    getCurrentUser,
    signup,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword,
    updateAccessToken,
    changePassword,
} from "../controllers/auth.controller.js";
import { getLoggedInUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", getLoggedInUser, getCurrentUser);
router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh-token", updateAccessToken);
router.post("/logout", getLoggedInUser, logout);

// Advanced features
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/change-password", getLoggedInUser, changePassword);

export default router;