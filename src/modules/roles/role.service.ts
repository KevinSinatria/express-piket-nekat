import type { PrismaClient } from "../../generated/prisma/client.js";

const getAll = async (prisma: PrismaClient) => {
  const roles = await prisma.roles.findMany();
  return roles;
};

export const roleService = { getAll };
