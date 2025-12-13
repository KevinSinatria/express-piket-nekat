import type z from "zod";
import type { userRolesSchema } from "./user-role.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";

type GetAllUserRoleParams = z.infer<
  typeof userRolesSchema.getAllSchema
>["params"];
type CreateUserRoleData = z.infer<typeof userRolesSchema.createSchema>["body"];
type DeleteUserRoleParams = z.infer<typeof userRolesSchema.idSchema>["params"];

const getAll = async (
  prisma: PrismaClient,
  user_id: GetAllUserRoleParams["user_id"]
) => {
  const userRoles = await prisma.user_role.findMany({
    where: {
      user_id: parseInt(user_id),
    },
    select: {
      role: true,
    },
  });

  const formattedUserRoles = userRoles.map((userRole) => userRole.role);
  return formattedUserRoles;
};

const create = async (
  prisma: PrismaClient,
  data: CreateUserRoleData,
  user_id: string
) => {
  return await prisma.user_role.create({
    data: {
      user_id: parseInt(user_id),
      role_id: parseInt(String(data.role_id)),
    },
  });
};

const deleteById = async (
  prisma: PrismaClient,
  params: DeleteUserRoleParams
) => {
  return await prisma.user_role.deleteMany({
    where: {
      user_id: parseInt(params.user_id),
      role_id: parseInt(params.role_id),
    },
  });
};

export const userRoleService = { getAll, create, deleteById };
