import type { Request, Response, NextFunction, CookieOptions } from "express";
import { authService } from "./auth.service.js";
import { prisma } from "../../config/prisma.js";
import type z from "zod";
import type { loginSchema } from "./auth.schema.js";
import { env } from "../../config/env.js";

type loginRequest = Request<
  unknown,
  unknown,
  z.infer<typeof loginSchema>["body"]
>;

const cookieOptions: CookieOptions = {
  secure: env("NODE_ENV") === "production",
  httpOnly: true,
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, user } = await authService.login(prisma, req.body);

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful.",
      data: user,
    });
  } catch (err) {
    if (
      err instanceof Error &&
      err.message.includes("Invalid username or password")
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    next(err);
  }
};

const getMe = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Get profile successful",
    data: req.user,
  });
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token", {
      ...cookieOptions,
      maxAge: 0,
    });

    res.status(200).json({
      success: true,
      message: "Logout successful.",
    });
  } catch (err) {
    next(err);
  }
};

export const authController = {
  login,
  logout,
  getMe,
};
