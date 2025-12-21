import z from "zod";
const getAllSchema = z.object({
    params: z.object({
        user_id: z.string({
            message: "User id is required",
        }),
    }),
});
const createSchema = z.object({
    params: z.object({
        user_id: z.string({
            message: "User id is required",
        }),
    }),
    body: z.object({
        role_id: z.number().min(1, "Role id is required"),
    }),
});
const idSchema = z.object({
    params: z.object({
        user_id: z.string({
            message: "User id is required",
        }),
        role_id: z.string({
            message: "Role id is required",
        }),
    }),
});
export const userRolesSchema = { createSchema, idSchema, getAllSchema };
//# sourceMappingURL=user-role.schema.js.map