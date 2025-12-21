import type z from "zod";
import type { userRolesSchema } from "./user-role.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";
type GetAllUserRoleParams = z.infer<typeof userRolesSchema.getAllSchema>["params"];
type CreateUserRoleData = z.infer<typeof userRolesSchema.createSchema>["body"];
type DeleteUserRoleParams = z.infer<typeof userRolesSchema.idSchema>["params"];
export declare const userRoleService: {
    getAll: (prisma: PrismaClient, user_id: GetAllUserRoleParams["user_id"]) => Promise<{
        id: number;
        name: string;
    }[]>;
    create: (prisma: PrismaClient, data: CreateUserRoleData, user_id: string) => Promise<{
        id: number;
        user_id: number;
        role_id: number;
    }>;
    deleteById: (prisma: PrismaClient, params: DeleteUserRoleParams) => Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
};
export {};
//# sourceMappingURL=user-role.service.d.ts.map