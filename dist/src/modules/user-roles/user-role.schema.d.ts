import z from "zod";
export declare const userRolesSchema: {
    createSchema: z.ZodObject<{
        params: z.ZodObject<{
            user_id: z.ZodString;
        }, z.z.core.$strip>;
        body: z.ZodObject<{
            role_id: z.ZodNumber;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    idSchema: z.ZodObject<{
        params: z.ZodObject<{
            user_id: z.ZodString;
            role_id: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    getAllSchema: z.ZodObject<{
        params: z.ZodObject<{
            user_id: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=user-role.schema.d.ts.map