import type z from "zod";
import type { loginSchema } from "./auth.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import type { PrismaClient } from "../../generated/prisma/client.js";

type loginRequest = z.infer<typeof loginSchema>["body"];

const login = async (prisma: PrismaClient, data: loginRequest) => {
  const user = await prisma.users.findUnique({
    where: {
      username: data.username,
    },
    include: {
      user_roles: {
        select: {
          role: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("Invalid username or password.");
  }

  const isValidPassword = await bcrypt.compare(data.password, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid username or password.");
  }

  const token = jwt.sign({ id: user.id.toString() }, env("JWT_SECRET"), {
    expiresIn: "1d",
  });

  const formattedUser = {
    id: user.id,
    username: user.username,
    fullname: user.fullname,
    roles: user.user_roles.map((role) => role.role.name),
  };

  return {
    token,
    user: formattedUser,
  };
};

export const authService = {
  login,
};
