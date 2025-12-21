import z from "zod";
export const getUsersSchema = z.object({
    query: z.object({
        page: z.coerce.number().int().min(1).optional().default(1),
        limit: z.coerce.number().int().min(1).optional().default(10),
        search: z.string().optional(),
    }),
});
export const createUserSchema = z.object({
    body: z.object({
        username: z.string().min(3, "Username must be at least 3 characters"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        fullname: z.string().min(1, "Fullname is required"),
        nip: z.string().min(1, "NIP is required.").optional(),
    }),
});
export const updateUserSchema = z.object({
    params: z.object({
        id: z.string({
            message: "User id is required",
        }),
    }),
    body: z.object({
        username: z.string().min(3, "Username must be at least 3 characters"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        fullname: z.string().min(1, "Fullname is required"),
        nip: z.string().min(1, "NIP is required.").optional(),
    }),
});
export const userIdSchema = z.object({
    params: z.object({
        id: z.string({
            message: "User id is required",
        }),
    }),
});
//# sourceMappingURL=user.schema.js.map