import express from "express";
import {
    signup,
    login,
    verifyEmail,
    forgotPassword,
    resetPassword,
    updateAccessToken,
    changePassword,
} from "../controllers/user/auth.controller.js";
import { getLoggedInUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create-account", signup);
router.post("/login", login);
router.get("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/change-password", getLoggedInUser, changePassword);
router.post("/refresh-token", updateAccessToken);

export default router;