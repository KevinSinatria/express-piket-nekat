import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { prisma } from "../config/prisma.js";
import type { UserPayload } from "../types/express.js";
import type { roles } from "../generated/prisma/client.js";

interface JwtPayload {
  id: string;
  iat: number;
  exp: number;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: no token provided.",
      });
    }

    const decoded = jwt.verify(token, env("JWT_SECRET")) as JwtPayload;
    const user = await prisma.users.findUnique({
      where: {
        id: parseInt(decoded.id),
      },
      select: {
        id: true,
        username: true,
        fullname: true,
        user_roles: {
          select: {
            role: true,
          },
        },
        nip: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: user not found.",
      });
    }

    const formattedUser: UserPayload = {
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      roles: user.user_roles.map((role) => role.role.name),
      nip: user.nip,
    };

    req.user = formattedUser;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: invalid token.",
    });
  }
};

export const roleCheckMiddleware =
  (roles: roles["name"][]) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user);
    if (
      !req.user ||
      !req.user.roles.some(
        (role: string) =>
          roles.map((role) => role.toLowerCase()).includes(role.toLowerCase())
      )
    ) {
      return res.status(403).json({
        success: false,
        message: "Forbidden.",
      });
    }

    next();
  };
