import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { prisma } from "../config/prisma.js";
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: no token provided.",
            });
        }
        const decoded = jwt.verify(token, env("JWT_SECRET"));
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
        const formattedUser = {
            id: user.id,
            username: user.username,
            fullname: user.fullname,
            roles: user.user_roles.map((role) => role.role.name),
            nip: user.nip,
        };
        req.user = formattedUser;
        next();
    }
    catch (err) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: invalid token.",
        });
    }
};
export const roleCheckMiddleware = (roles) => (req, res, next) => {
    console.log(req.user);
    if (!req.user ||
        !req.user.roles.some((role) => roles.map((role) => role.toLowerCase()).includes(role.toLowerCase()))) {
        return res.status(403).json({
            success: false,
            message: "Forbidden.",
        });
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map