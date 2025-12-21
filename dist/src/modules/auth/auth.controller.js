import { authService } from "./auth.service.js";
import { prisma } from "../../config/prisma.js";
import { env } from "../../config/env.js";
const cookieOptions = {
    secure: env("NODE_ENV") === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};
const login = async (req, res, next) => {
    try {
        const { token, user } = await authService.login(prisma, req.body);
        res.cookie("token", token, cookieOptions);
        res.status(200).json({
            success: true,
            message: "Login successful.",
            data: user,
        });
    }
    catch (err) {
        if (err instanceof Error &&
            err.message.includes("Invalid username or password")) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password.",
            });
        }
        next(err);
    }
};
const getMe = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get profile successful",
        data: req.user,
    });
};
const logout = async (req, res, next) => {
    try {
        res.clearCookie("token", {
            ...cookieOptions,
            maxAge: 0,
        });
        res.status(200).json({
            success: true,
            message: "Logout successful.",
        });
    }
    catch (err) {
        next(err);
    }
};
export const authController = {
    login,
    logout,
    getMe,
};
//# sourceMappingURL=auth.controller.js.map